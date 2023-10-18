import webembedApiProxy from '@onekeyhq/kit-bg/src/webembeds/instance/webembedApiProxy';

import type { IAdaSdk, IEnsureSDKReady, IGetCardanoApi } from './types';

const getCardanoApi: IGetCardanoApi = async () =>
  Promise.resolve(webembedApiProxy.chainAdaLegacy);

// auto check webembedApi ready by calling each method
const ensureSDKReady: IEnsureSDKReady = async () => Promise.resolve(true);

const sdk: IAdaSdk = { getCardanoApi, ensureSDKReady };
export default sdk;