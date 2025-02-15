import { ListView, Stack, renderNestedScrollView } from '@onekeyhq/components';
import { getFilteredTokenBySearchKey } from '@onekeyhq/shared/src/utils/tokenUtils';
import type { IAccountToken } from '@onekeyhq/shared/types/token';

import { useTabListScroll } from '../../hooks/useTabListScroll';
import {
  useSearchKeyAtom,
  useSearchTokenListAtom,
  useSearchTokenStateAtom,
  useTokenListAtom,
  useTokenListStateAtom,
} from '../../states/jotai/contexts/tokenList';
import { EmptySearch } from '../Empty';
import { EmptyToken } from '../Empty/EmptyToken';
import { ListLoading } from '../Loading';

import { TokenListFooter } from './TokenListFooter';
import { TokenListHeader } from './TokenListHeader';
import { TokenListItem } from './TokenListItem';

type IProps = {
  tableLayout?: boolean;
  onRefresh?: () => void;
  onPressToken?: (token: IAccountToken) => void;
  withHeader?: boolean;
  withFooter?: boolean;
  withPrice?: boolean;
  withBuyAndReceive?: boolean;
  withPresetVerticalPadding?: boolean;
  withNetwork?: boolean;
  inTabList?: boolean;
  onReceiveToken?: () => void;
  onBuyToken?: () => void;
  isBuyTokenSupported?: boolean;
  onManageToken?: () => void;
  manageTokenEnabled?: boolean;
  isAllNetworks?: boolean;
  searchAll?: boolean;
  isTokenSelectorLayout?: boolean;
};

function TokenListView(props: IProps) {
  const {
    onPressToken,
    tableLayout,
    withHeader,
    withFooter,
    withPrice,
    inTabList = false,
    withBuyAndReceive,
    withNetwork,
    onReceiveToken,
    onBuyToken,
    isBuyTokenSupported,
    onManageToken,
    manageTokenEnabled,
    withPresetVerticalPadding = true,
    isAllNetworks,
    searchAll,
    isTokenSelectorLayout,
  } = props;

  const [tokenList] = useTokenListAtom();
  const [tokenListState] = useTokenListStateAtom();
  const [searchKey] = useSearchKeyAtom();
  const { tokens } = tokenList;
  const [searchTokenState] = useSearchTokenStateAtom();
  const [searchTokenList] = useSearchTokenListAtom();

  const filteredTokens = getFilteredTokenBySearchKey({
    tokens,
    searchKey,
    searchAll,
    searchTokenList: searchTokenList.tokens,
  });

  const { listViewProps, listViewRef, onLayout } =
    useTabListScroll<IAccountToken>({
      inTabList,
    });

  if (
    searchTokenState.isSearching ||
    (!tokenListState.initialized && tokenListState.isRefreshing)
  ) {
    return <ListLoading isTokenSelectorView />;
  }

  return (
    <ListView
      {...listViewProps}
      renderScrollComponent={renderNestedScrollView}
      // py={withPresetVerticalPadding ? '$3' : '$0'}
      estimatedItemSize={tableLayout ? 48 : 60}
      ref={listViewRef}
      onLayout={onLayout}
      data={filteredTokens}
      ListHeaderComponent={
        withHeader && tokens.length > 0 ? (
          <TokenListHeader
            filteredTokens={filteredTokens}
            tableLayout={tableLayout}
            onManageToken={onManageToken}
            manageTokenEnabled={manageTokenEnabled}
          />
        ) : null
      }
      ListEmptyComponent={
        searchKey ? (
          <EmptySearch
            onManageToken={onManageToken}
            manageTokenEnabled={manageTokenEnabled}
          />
        ) : (
          <EmptyToken
            withBuyAndReceive={withBuyAndReceive}
            isBuyTokenSupported={isBuyTokenSupported}
            onBuy={onBuyToken}
            onReceive={onReceiveToken}
          />
        )
      }
      renderItem={({ item }) => (
        <TokenListItem
          token={item}
          key={item.$key}
          onPress={onPressToken}
          tableLayout={tableLayout}
          withPrice={withPrice}
          isAllNetworks={isAllNetworks}
          withNetwork={withNetwork}
          isTokenSelectorLayout={isTokenSelectorLayout}
        />
      )}
      ListFooterComponent={
        <Stack pb="$5">
          {withFooter ? <TokenListFooter tableLayout={tableLayout} /> : null}
        </Stack>
      }
    />
  );
}

export { TokenListView };
