import { memo, useMemo } from 'react';

import { useIntl } from 'react-intl';

import { Icon, Select, SizableText, XStack } from '@onekeyhq/components';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import { useDebugComponentRemountLog } from '@onekeyhq/shared/src/utils/debugUtils';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';
import { usePromiseResult } from '../../../hooks/usePromiseResult';
import {
  useAccountSelectorActions,
  useAccountSelectorStorageReadyAtom,
  useSelectedAccount,
} from '../../../states/jotai/contexts/accountSelector';
import { ChainSelectorInput } from '../../ChainSelectorInput';
import { NetworkAvatar } from '../../NetworkAvatar';
import { useNetworkSelectorTrigger } from '../hooks/useNetworkSelectorTrigger';

function useNetworkSelectorItems() {
  const { serviceNetwork } = backgroundApiProxy;

  const allNetworksRes = usePromiseResult(
    () => serviceNetwork.getAllNetworks(),
    [serviceNetwork],
  );
  const items = useMemo(
    () =>
      allNetworksRes.result?.networks.map((item) => ({
        value: item.id,
        label: item.name,
      })) || [],
    [allNetworksRes.result?.networks],
  );

  return items;
}

export function NetworkSelectorTriggerLegacyCmp({ num }: { num: number }) {
  const items = useNetworkSelectorItems();

  const { selectedAccount } = useSelectedAccount({ num });
  const actions = useAccountSelectorActions();
  const [isReady] = useAccountSelectorStorageReadyAtom();

  useDebugComponentRemountLog({ name: 'NetworkSelectorTriggerLegacy' });

  if (!isReady) {
    return null;
  }

  return (
    <>
      <SizableText size="$headingXl">
        网络选择器 {selectedAccount.networkId}
      </SizableText>
      <Select
        items={items}
        value={selectedAccount.networkId}
        onChange={(id) =>
          actions.current.updateSelectedAccountNetwork({
            num,
            networkId: id,
          })
        }
        title="网络"
      />
    </>
  );
}

export const NetworkSelectorTriggerLegacy = memo(
  NetworkSelectorTriggerLegacyCmp,
);

function NetworkSelectorTriggerHomeCmp({ num }: { num: number }) {
  const {
    activeAccount: { network },
    showChainSelector,
  } = useNetworkSelectorTrigger({ num });

  const intl = useIntl();

  useDebugComponentRemountLog({ name: 'NetworkSelectorTriggerHome' });

  return (
    <XStack
      role="button"
      flexShrink={1}
      alignItems="center"
      p="$1"
      m="$-1"
      borderRadius="$2"
      hoverStyle={{
        bg: '$bgHover',
      }}
      pressStyle={{
        bg: '$bgActive',
      }}
      focusable
      focusStyle={{
        outlineWidth: 2,
        outlineColor: '$focusRing',
        outlineStyle: 'solid',
      }}
      $platform-native={{
        hitSlop: {
          top: 8,
          bottom: 8,
          left: 8,
        },
      }}
      userSelect="none"
      onPress={showChainSelector}
    >
      <NetworkAvatar networkId={network?.id} size="$5" />
      <SizableText pl="$2" size="$bodyMd" flexShrink={1} numberOfLines={1}>
        {network?.isAllNetworks
          ? intl.formatMessage({ id: ETranslations.global_all_networks })
          : network?.name}
      </SizableText>
      <Icon
        name="ChevronDownSmallOutline"
        color="$iconSubdued"
        size="$5"
        flexShrink={0}
      />
    </XStack>
  );
}
export const NetworkSelectorTriggerHome = memo(NetworkSelectorTriggerHomeCmp);

export function ControlledNetworkSelectorTrigger({
  value,
  onChange,
  networkIds,
  forceDisabled,
  disabled,
  editable,
}: {
  value?: string;
  onChange?: (networkId: string) => void;
  networkIds?: string[];
  forceDisabled?: boolean;
  disabled?: boolean; // TODO not working in form
  editable?: boolean | undefined;
}) {
  const intl = useIntl();
  return (
    <ChainSelectorInput
      testID="network-selector-input"
      title={intl.formatMessage({ id: ETranslations.global_networks })}
      value={value}
      onChange={onChange}
      editable={editable}
      disabled={forceDisabled || disabled}
      // editable={false}
      // disabled
      networkIds={networkIds}
      borderRadius="$3"
      borderWidth={1}
      borderCurve="continuous"
      borderColor="$borderStrong"
      userSelect="none"
      px="$3"
      py="$2.5"
      $gtMd={{
        borderRadius: '$2',
        py: '$2',
      }}
    />
  );
}
