import { useCallback, useEffect, useMemo } from 'react';

import { useIntl } from 'react-intl';

import { Toast } from '@onekeyhq/components';
import { useAppUpdatePersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import {
  EAppUpdateStatus,
  isFirstLaunchAfterUpdated,
  isNeedUpdate,
} from '@onekeyhq/shared/src/appUpdate';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import {
  downloadPackage as NativeDownloadPackage,
  installPackage,
  verifyPackage,
} from '@onekeyhq/shared/src/modules3rdParty/auto-update';
import { EAppUpdateRoutes, EModalRoutes } from '@onekeyhq/shared/src/routes';
import timerUtils from '@onekeyhq/shared/src/utils/timerUtils';

import backgroundApiProxy from '../../background/instance/backgroundApiProxy';
import useAppNavigation from '../../hooks/useAppNavigation';
import { usePromiseResult } from '../../hooks/usePromiseResult';

export const useAppChangeLog = (version?: string) => {
  const response = usePromiseResult(
    () =>
      version
        ? backgroundApiProxy.serviceAppUpdate.fetchChangeLog()
        : Promise.resolve(null),
    [version],
  );
  return useMemo(() => response.result, [response.result]);
};

export const useDownloadPackage = () => {
  const intl = useIntl();
  return useCallback(
    async (params: {
      downloadUrl?: string;
      latestVersion?: string;
      sha256?: string;
    }) => {
      try {
        await backgroundApiProxy.serviceAppUpdate.startDownloading();
        const result = await NativeDownloadPackage(params);
        await backgroundApiProxy.serviceAppUpdate.verifyPackage(result);
        // The UI verification must display for at least 3 seconds.
        await Promise.all([verifyPackage(result), timerUtils.wait(3000)]);
        await backgroundApiProxy.serviceAppUpdate.readyToInstall();
      } catch (e) {
        Toast.error({
          title: intl.formatMessage({
            id: ETranslations.global_update_failed,
          }),
        });
        void backgroundApiProxy.serviceAppUpdate.notifyFailed(e as any);
      }
    },
    [intl],
  );
};

export const useAppUpdateInfo = (isFullModal = false) => {
  const intl = useIntl();
  const [appUpdateInfo] = useAppUpdatePersistAtom();
  const navigation = useAppNavigation();
  const downloadPackage = useDownloadPackage();
  const onViewReleaseInfo = useCallback(() => {
    setTimeout(() => {
      const pushModal = isFullModal
        ? navigation.pushFullModal
        : navigation.pushModal;
      pushModal(EModalRoutes.AppUpdateModal, {
        screen: EAppUpdateRoutes.WhatsNew,
      });
    });
  }, [isFullModal, navigation.pushFullModal, navigation.pushModal]);

  const toUpdatePreviewPage = useCallback(
    (
      isFull = false,
      params?: {
        latestVersion?: string;
        isForceUpdate?: boolean;
      },
    ) => {
      const pushModal = isFull
        ? navigation.pushFullModal
        : navigation.pushModal;
      pushModal(EModalRoutes.AppUpdateModal, {
        screen: EAppUpdateRoutes.UpdatePreview,
        params: {
          latestVersion: appUpdateInfo.latestVersion,
          isForceUpdate: appUpdateInfo.isForceUpdate,
          autoClose: isFull,
          ...params,
        },
      });
    },
    [
      appUpdateInfo.isForceUpdate,
      appUpdateInfo.latestVersion,
      navigation.pushFullModal,
      navigation.pushModal,
    ],
  );

  // run only once
  useEffect(() => {
    if (isFirstLaunchAfterUpdated(appUpdateInfo)) {
      onViewReleaseInfo();
    }
    if (appUpdateInfo.status === EAppUpdateStatus.downloading) {
      void downloadPackage(appUpdateInfo);
    }
    void backgroundApiProxy.serviceAppUpdate
      .fetchAppUpdateInfo()
      .then((response) => {
        if (
          response?.isForceUpdate &&
          isNeedUpdate(response.latestVersion, response.status)
        ) {
          toUpdatePreviewPage(true, response);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdateAction = useCallback(() => {
    switch (appUpdateInfo.status) {
      case EAppUpdateStatus.notify:
      case EAppUpdateStatus.downloading:
      case EAppUpdateStatus.verifying:
        toUpdatePreviewPage(isFullModal);
        break;
      case EAppUpdateStatus.ready:
        void installPackage(appUpdateInfo).catch((e) => {
          Toast.error({
            title: intl.formatMessage({
              id: ETranslations.global_update_failed,
            }),
          });
          void backgroundApiProxy.serviceAppUpdate.notifyFailed(e);
        });
        break;
      case EAppUpdateStatus.failed:
        void downloadPackage(appUpdateInfo);
        break;
      default:
        break;
    }
  }, [appUpdateInfo, downloadPackage, intl, isFullModal, toUpdatePreviewPage]);

  return useMemo(
    () => ({
      isNeedUpdate: isNeedUpdate(
        appUpdateInfo.latestVersion,
        appUpdateInfo.status,
      ),
      data: appUpdateInfo,
      onUpdateAction,
      toUpdatePreviewPage,
      onViewReleaseInfo,
    }),
    [appUpdateInfo, onUpdateAction, onViewReleaseInfo, toUpdatePreviewPage],
  );
};
