import semver from 'semver';

import platformEnv from '../platformEnv';

import { EAppUpdateStatus } from './type';

import type { IAppUpdateInfo } from './type';

export * from './handle';
export * from './type';

const APP_VERSION = platformEnv.version ?? '1.0.0';

export const isNeedUpdate = (latestVersion?: string) =>
  latestVersion && semver.gt(latestVersion, APP_VERSION);

export const isFirstLaunchAfterUpdated = (appUpdateInfo: IAppUpdateInfo) =>
  appUpdateInfo.status !== EAppUpdateStatus.done &&
  appUpdateInfo.latestVersion &&
  semver.gt(APP_VERSION, appUpdateInfo.latestVersion);
