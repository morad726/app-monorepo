import { type FC } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableFreeze } from 'react-native-screens';
import { Provider as ReduxProvider } from 'react-redux';

import { Portal } from '@onekeyhq/components';
import store from '@onekeyhq/kit/src/store';
import { freezedEmptyObject } from '@onekeyhq/shared/src/consts/sharedConsts';
import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';
import flowLogger from '@onekeyhq/shared/src/logger/flowLogger/flowLogger';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

import AppLoading from './AppLoading';
import NavigationProvider from './NavigationProvider';
import ThemeProvider from './ThemeProvider';

if (platformEnv.isRuntimeBrowser) {
  // FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
  // @ts-ignore
  window._frameTimestamp = null;
}

const flexStyle = { flex: 1 };

enableFreeze();

// TODO: detect network change & APP in background mode
const KitProvider: FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <AppLoading>
        <GestureHandlerRootView style={flexStyle}>
          <NavigationProvider />
        </GestureHandlerRootView>
      </AppLoading>
      <Portal />
    </ThemeProvider>
  </ReduxProvider>
);

// TODO remove
console.log(flowLogger);
debugLogger.providerApi.info('KitProvider imported done!');

export default KitProvider;