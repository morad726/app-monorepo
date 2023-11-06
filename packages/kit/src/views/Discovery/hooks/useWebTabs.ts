import { useMemo } from 'react';

import { atomWebTabsMap } from '../../Discover/Explorer/Context/contextWebTabs';
import {
  activeTabIdAtom,
  getActiveTabId,
  getTabs,
  getTabsMap,
  useAtomWebTabs,
  webTabsAtom,
} from '../container/Context/contextWebTabs';

export const useWebTabs = () => {
  const [webTabs] = useAtomWebTabs(webTabsAtom);
  return useMemo(
    () => ({
      tabs: webTabs.tabs,
    }),
    [webTabs],
  );
};

export const useWebTabData = (id?: string) => {
  const [map] = useAtomWebTabs(atomWebTabsMap);
  return useMemo(
    () => ({
      tab: map[id ?? ''],
    }),
    [map, id],
  );
};

export const useActiveTabId = () => {
  const [activeTabId] = useAtomWebTabs(activeTabIdAtom);
  return useMemo(
    () => ({
      activeTabId,
    }),
    [activeTabId],
  );
};

// not a hook, won't refresh
export const getWebTabs = (id?: string) => {
  const webTabs = getTabs();
  const map = getTabsMap();
  const activeTabId = getActiveTabId();
  const curId = id || activeTabId;
  return {
    tabs: webTabs?.tabs ?? [],
    tab: map?.[curId || ''],
    activeTabId,
  };
};
