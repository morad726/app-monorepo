import { useRef } from 'react';

import BigNumber from 'bignumber.js';
import { debounce } from 'lodash';

import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import type { useSwapAddressInfo } from '@onekeyhq/kit/src/views/Swap/hooks/useSwapAccount';
import { moveNetworkToFirst } from '@onekeyhq/kit/src/views/Swap/utils/utils';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import { appLocale } from '@onekeyhq/shared/src/locale/appLocale';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import { memoFn } from '@onekeyhq/shared/src/utils/cacheUtils';
import { numberFormat } from '@onekeyhq/shared/src/utils/numberUtils';
import {
  swapApprovingStateFetchInterval,
  swapHistoryStateFetchRiceIntervalCount,
  swapQuoteFetchInterval,
  swapQuoteIntervalMaxCount,
  swapRateDifferenceMax,
  swapRateDifferenceMin,
  swapTokenCatchMapMaxCount,
} from '@onekeyhq/shared/types/swap/SwapProvider.constants';
import type {
  IFetchTokensParams,
  ISwapAlertState,
  ISwapApproveTransaction,
  ISwapToken,
} from '@onekeyhq/shared/types/swap/types';
import {
  ESwapAlertLevel,
  ESwapApproveTransactionStatus,
  ESwapDirectionType,
  ESwapFetchCancelCause,
  ESwapRateDifferenceUnit,
  ESwapSlippageSegmentKey,
  ESwapTxHistoryStatus,
} from '@onekeyhq/shared/types/swap/types';

import { ContextJotaiActionsBase } from '../../utils/ContextJotaiActionsBase';

import {
  contextAtomMethod,
  rateDifferenceAtom,
  swapAlertsAtom,
  swapBuildTxFetchingAtom,
  swapFromTokenAmountAtom,
  swapManualSelectQuoteProvidersAtom,
  swapNetworks,
  swapQuoteCurrentSelectAtom,
  swapQuoteFetchingAtom,
  swapQuoteListAtom,
  swapSelectFromTokenAtom,
  swapSelectToTokenAtom,
  swapSelectTokenDetailFetchingAtom,
  swapSelectedFromTokenBalanceAtom,
  swapSelectedToTokenBalanceAtom,
  swapShouldRefreshQuoteAtom,
  swapSilenceQuoteLoading,
  swapSlippagePercentageAtom,
  swapSlippagePercentageModeAtom,
  swapTokenFetchingAtom,
  swapTokenMapAtom,
} from './atoms';

class ContentJotaiActionsSwap extends ContextJotaiActionsBase {
  private quoteInterval: ReturnType<typeof setTimeout> | undefined;

  private approvingInterval: ReturnType<typeof setTimeout> | undefined;

  private approvingIntervalCount = 0;

  private quoteIntervalCount = 0;

  syncNetworksSort = contextAtomMethod(async (get, set, netWorkId: string) => {
    const networks = get(swapNetworks());
    const sortNetworks = moveNetworkToFirst(networks, netWorkId);
    set(swapNetworks(), sortNetworks);
    await backgroundApiProxy.simpleDb.swapNetworksSort.setRawData({
      data: sortNetworks,
    });
  });

  resetSwapSlippage = contextAtomMethod((get, set) => {
    set(swapSlippagePercentageModeAtom(), ESwapSlippageSegmentKey.AUTO);
  });

  cleanManualSelectQuoteProviders = contextAtomMethod((get, set) => {
    set(swapManualSelectQuoteProvidersAtom(), undefined);
  });

  catchSwapTokensMap = contextAtomMethod(
    async (get, set, key: string, tokens: ISwapToken[]) => {
      const swapTokenMap = get(swapTokenMapAtom());
      const swapNetworksList = get(swapNetworks());
      const catchTokens = swapTokenMap.tokenCatch?.[key];
      const dateNow = Date.now();
      let catchCount = 0;
      const newTokens = tokens.map((token) => {
        const network = swapNetworksList.find(
          (n) => n.networkId === token.networkId,
        );
        if (network) {
          token.networkLogoURI = network.logoURI;
        }
        return token;
      });
      if (swapTokenMap.tokenCatch && catchTokens?.data) {
        // have catch
        if (JSON.stringify(catchTokens.data) !== JSON.stringify(newTokens)) {
          // catch data not equal
          const newTokenCatch = { ...swapTokenMap.tokenCatch };
          newTokenCatch[key] = {
            data: newTokens,
            updatedAt: dateNow,
          };
          swapTokenMap.tokenCatch = { ...newTokenCatch };
        }
        catchCount = Object.keys(swapTokenMap.tokenCatch).length;
      } else {
        // no catch
        swapTokenMap.tokenCatch = {
          ...(swapTokenMap.tokenCatch ?? {}),
          [key]: { data: newTokens, updatedAt: dateNow },
        };
        catchCount = Object.keys(swapTokenMap.tokenCatch).length;
      }
      if (swapTokenMap.tokenCatch && catchCount > swapTokenCatchMapMaxCount) {
        // clean old catch
        const oldUpdatedAtKey = Object.entries(swapTokenMap.tokenCatch).reduce(
          (min, [mapKey, obj]) =>
            obj.updatedAt < (swapTokenMap.tokenCatch?.[min]?.updatedAt ?? 0)
              ? mapKey
              : min,
          Object.keys(swapTokenMap.tokenCatch)[0],
        );
        if (oldUpdatedAtKey) {
          delete swapTokenMap.tokenCatch[oldUpdatedAtKey];
        }
      }
      set(swapTokenMapAtom(), { ...swapTokenMap, updatedAt: dateNow });
    },
  );

  selectFromToken = contextAtomMethod(async (get, set, token: ISwapToken) => {
    const fromToken = get(swapSelectFromTokenAtom());
    if (
      fromToken?.networkId !== token.networkId ||
      fromToken?.contractAddress !== token.contractAddress
    ) {
      this.cleanManualSelectQuoteProviders.call(set);
      this.resetSwapSlippage.call(set);
      await this.syncNetworksSort.call(set, token.networkId);
    }
    set(swapSelectFromTokenAtom(), token);
  });

  selectToToken = contextAtomMethod(async (get, set, token: ISwapToken) => {
    const toToken = get(swapSelectToTokenAtom());
    if (
      toToken?.networkId !== token.networkId ||
      toToken?.contractAddress !== token.contractAddress
    ) {
      this.cleanManualSelectQuoteProviders.call(set);
      this.resetSwapSlippage.call(set);
      await this.syncNetworksSort.call(set, token.networkId);
    }
    set(swapSelectToTokenAtom(), token);
  });

  alternationToken = contextAtomMethod((get, set) => {
    const fromToken = get(swapSelectFromTokenAtom());
    const toToken = get(swapSelectToTokenAtom());
    if (!fromToken && !toToken) {
      return;
    }
    set(swapSelectFromTokenAtom(), toToken);
    set(swapSelectToTokenAtom(), fromToken);
    this.resetSwapSlippage.call(set);
    this.cleanManualSelectQuoteProviders.call(set);
  });

  tokenListFetchAction = contextAtomMethod(
    async (get, set, params: IFetchTokensParams) => {
      try {
        set(swapTokenFetchingAtom(), true);
        const result = await backgroundApiProxy.serviceSwap.fetchSwapTokens({
          ...params,
        });
        if (result.length > 0) {
          await this.catchSwapTokensMap.call(
            set,
            JSON.stringify(params),
            result,
          );
        }
        set(swapTokenFetchingAtom(), false);
      } catch (e: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (e?.cause !== ESwapFetchCancelCause.SWAP_TOKENS_CANCEL) {
          set(swapTokenFetchingAtom(), false);
        }
      }
    },
  );

  runQuote = contextAtomMethod(
    async (
      get,
      set,
      fromToken: ISwapToken,
      toToken: ISwapToken,
      fromTokenAmount: string,
      slippagePercentage: number,
      autoSlippage?: boolean,
      address?: string,
      accountId?: string,
      loadingDelayEnable?: boolean,
      blockNumber?: number,
    ) => {
      const shouldRefreshQuote = get(swapShouldRefreshQuoteAtom());
      if (shouldRefreshQuote) {
        this.cleanQuoteInterval();
        return;
      }
      await backgroundApiProxy.serviceSwap.setApprovingTransaction(undefined);
      let enableInterval = true;
      try {
        if (!loadingDelayEnable) {
          set(swapQuoteFetchingAtom(), true);
        }
        const res = await backgroundApiProxy.serviceSwap.fetchQuotes({
          fromToken,
          toToken,
          fromTokenAmount,
          userAddress: address,
          slippagePercentage,
          autoSlippage,
          blockNumber,
          accountId,
        });
        if (!loadingDelayEnable) {
          set(swapQuoteFetchingAtom(), false);
          set(swapQuoteListAtom(), res);
        } else {
          set(swapSilenceQuoteLoading(), true);
          setTimeout(() => {
            set(swapSilenceQuoteLoading(), false);
            set(swapQuoteListAtom(), res);
          }, 800);
        }
      } catch (e: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (e?.cause !== ESwapFetchCancelCause.SWAP_QUOTE_CANCEL) {
          set(swapQuoteFetchingAtom(), false);
        } else {
          enableInterval = false;
        }
      } finally {
        if (enableInterval) {
          this.quoteIntervalCount += 1;
          if (this.quoteIntervalCount < swapQuoteIntervalMaxCount) {
            void this.recoverQuoteInterval.call(set, address, accountId, true);
          }
        }
      }
    },
  );

  quoteAction = contextAtomMethod(
    async (
      get,
      set,
      address?: string,
      accountId?: string,
      blockNumber?: number,
    ) => {
      this.cleanQuoteInterval();
      this.quoteIntervalCount = 0;
      set(swapBuildTxFetchingAtom(), false);
      set(swapShouldRefreshQuoteAtom(), false);
      const fromToken = get(swapSelectFromTokenAtom());
      const toToken = get(swapSelectToTokenAtom());
      const fromTokenAmount = get(swapFromTokenAmountAtom());
      const { slippageItem } = get(swapSlippagePercentageAtom());
      const fromTokenAmountNumber = Number(fromTokenAmount);
      if (
        fromToken &&
        toToken &&
        !Number.isNaN(fromTokenAmountNumber) &&
        fromTokenAmountNumber > 0
      ) {
        void this.runQuote.call(
          set,
          fromToken,
          toToken,
          fromTokenAmount,
          slippageItem.value,
          slippageItem.key === ESwapSlippageSegmentKey.AUTO,
          address,
          accountId,
          false,
          blockNumber,
        );
      } else {
        await backgroundApiProxy.serviceSwap.cancelFetchQuotes();
        set(swapQuoteFetchingAtom(), false);
        set(swapQuoteListAtom(), []);
      }
    },
  );

  approvingStateRunSync = contextAtomMethod(
    async (get, set, networkId: string, txId: string) => {
      let enableInterval = true;
      try {
        const txState = await backgroundApiProxy.serviceSwap.fetchTxState({
          txId,
          networkId,
        });
        const preApproveTx =
          await backgroundApiProxy.serviceSwap.getApprovingTransaction();
        if (
          txState.state === ESwapTxHistoryStatus.SUCCESS ||
          txState.state === ESwapTxHistoryStatus.FAILED
        ) {
          enableInterval = false;
          if (preApproveTx) {
            if (
              txState.state === ESwapTxHistoryStatus.SUCCESS ||
              txState.state === ESwapTxHistoryStatus.FAILED
            ) {
              let newApproveTx: ISwapApproveTransaction = {
                ...preApproveTx,
                blockNumber: txState.blockNumber,
                status: ESwapApproveTransactionStatus.SUCCESS,
              };
              if (txState.state === ESwapTxHistoryStatus.FAILED) {
                newApproveTx = {
                  ...preApproveTx,
                  txId: undefined,
                  status: ESwapApproveTransactionStatus.FAILED,
                };
              }
              await backgroundApiProxy.serviceSwap.setApprovingTransaction(
                newApproveTx,
              );
            }
          }
          if (txState.state !== ESwapTxHistoryStatus.SUCCESS) {
            set(swapBuildTxFetchingAtom(), false);
          }
        } else if (
          preApproveTx &&
          preApproveTx.status !== ESwapApproveTransactionStatus.PENDING
        ) {
          await backgroundApiProxy.serviceSwap.setApprovingTransaction({
            ...preApproveTx,
            status: ESwapApproveTransactionStatus.PENDING,
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (enableInterval) {
          this.approvingIntervalCount += 1;
          void this.approvingStateAction.call(set);
        } else {
          this.cleanApprovingInterval();
          this.approvingIntervalCount = 0;
        }
      }
    },
  );

  approvingStateAction = contextAtomMethod(async (get, set) => {
    this.cleanApprovingInterval();
    const approvingTransaction =
      await backgroundApiProxy.serviceSwap.getApprovingTransaction();
    if (approvingTransaction && approvingTransaction.txId) {
      this.approvingInterval = setTimeout(() => {
        if (approvingTransaction.txId) {
          void this.approvingStateRunSync.call(
            set,
            approvingTransaction.fromToken.networkId,
            approvingTransaction.txId,
          );
        }
      }, swapApprovingStateFetchInterval * (Math.floor(this.approvingIntervalCount / swapHistoryStateFetchRiceIntervalCount) + 1));
    }
  });

  recoverQuoteInterval = contextAtomMethod(
    async (
      get,
      set,
      address?: string,
      accountId?: string,
      unResetCount?: boolean,
    ) => {
      this.cleanQuoteInterval();
      if (!unResetCount) {
        this.quoteIntervalCount = 0;
      }
      set(swapBuildTxFetchingAtom(), false);
      set(swapQuoteFetchingAtom(), false);
      const currentApproveTx =
        await backgroundApiProxy.serviceSwap.getApprovingTransaction();
      if (currentApproveTx?.status === ESwapApproveTransactionStatus.PENDING) {
        void backgroundApiProxy.serviceSwap.setApprovingTransaction({
          ...currentApproveTx,
          status: ESwapApproveTransactionStatus.CANCEL,
        });
      }
      const fromToken = get(swapSelectFromTokenAtom());
      const toToken = get(swapSelectToTokenAtom());
      const fromTokenAmount = get(swapFromTokenAmountAtom());
      const { slippageItem } = get(swapSlippagePercentageAtom());
      const fromTokenAmountNumber = Number(fromTokenAmount);
      if (
        fromToken &&
        toToken &&
        !Number.isNaN(fromTokenAmountNumber) &&
        fromTokenAmountNumber > 0
      ) {
        this.quoteInterval = setTimeout(() => {
          void this.runQuote.call(
            set,
            fromToken,
            toToken,
            fromTokenAmount,
            slippageItem.value,
            slippageItem.key === ESwapSlippageSegmentKey.AUTO,
            address,
            accountId,
            true,
          );
        }, swapQuoteFetchInterval);
      }
    },
  );

  cleanQuoteInterval = () => {
    if (this.quoteInterval) {
      clearTimeout(this.quoteInterval);
      this.quoteInterval = undefined;
    }
    void backgroundApiProxy.serviceSwap.cancelFetchQuotes();
  };

  cleanApprovingInterval = () => {
    if (this.approvingInterval) {
      clearTimeout(this.approvingInterval);
      this.approvingInterval = undefined;
    }
  };

  getQuoteIntervalCount = () => this.quoteIntervalCount;

  checkSwapWarning = contextAtomMethod(
    async (
      get,
      set,
      swapFromAddressInfo: ReturnType<typeof useSwapAddressInfo>,
      // swapToAddressInfo: ReturnType<typeof useSwapAddressInfo>,
    ) => {
      const fromToken = get(swapSelectFromTokenAtom());
      const toToken = get(swapSelectToTokenAtom());
      const networks = get(swapNetworks());
      const quoteResult = get(swapQuoteCurrentSelectAtom());
      const fromTokenAmount = get(swapFromTokenAmountAtom());
      let alertsRes: ISwapAlertState[] = [];
      let rateDifferenceRes:
        | { value: string; unit: ESwapRateDifferenceUnit }
        | undefined;
      if (
        quoteResult &&
        fromToken &&
        toToken &&
        (quoteResult?.fromTokenInfo?.networkId !== fromToken?.networkId ||
          quoteResult?.toTokenInfo?.networkId !== toToken?.networkId ||
          quoteResult?.fromTokenInfo?.contractAddress !==
            fromToken?.contractAddress ||
          quoteResult?.toTokenInfo?.contractAddress !==
            toToken?.contractAddress)
      ) {
        return;
      }
      if (!networks.length || !swapFromAddressInfo.accountInfo?.ready) return;
      // check account
      if (!swapFromAddressInfo.accountInfo?.wallet) {
        alertsRes = [
          ...alertsRes,
          {
            message: appLocale.intl.formatMessage({
              id: ETranslations.swap_page_button_no_connected_wallet,
            }),
            alertLevel: ESwapAlertLevel.ERROR,
          },
        ];
        set(swapAlertsAtom(), alertsRes);
        return;
      }

      if (
        fromToken &&
        ((!swapFromAddressInfo.address &&
          !accountUtils.isHdWallet({
            walletId: swapFromAddressInfo.accountInfo?.wallet?.id,
          }) &&
          !accountUtils.isHwWallet({
            walletId: swapFromAddressInfo.accountInfo?.wallet?.id,
          })) ||
          swapFromAddressInfo.networkId !== fromToken.networkId ||
          accountUtils.isWatchingWallet({
            walletId: swapFromAddressInfo.accountInfo.wallet.id,
          }))
      ) {
        alertsRes = [
          ...alertsRes,
          {
            message: appLocale.intl.formatMessage({
              id: ETranslations.swap_page_alert_account_does_not_support_swap,
            }),
            alertLevel: ESwapAlertLevel.ERROR,
          },
        ];
      }

      // provider best check
      if (quoteResult?.toAmount && !quoteResult.isBest) {
        alertsRes = [
          ...alertsRes,
          {
            message: appLocale.intl.formatMessage({
              id: ETranslations.swap_page_alert_not_best_rate,
            }),
            alertLevel: ESwapAlertLevel.WARNING,
          },
        ];
      }

      // market rate check
      if (fromToken?.price && toToken?.price && quoteResult?.instantRate) {
        const fromTokenPrice = new BigNumber(fromToken.price);
        const toTokenPrice = new BigNumber(toToken.price);
        if (!fromTokenPrice.isZero() && !toTokenPrice.isZero()) {
          const marketingRate = fromTokenPrice.dividedBy(toTokenPrice);
          const quoteRateBN = new BigNumber(quoteResult.instantRate);
          const difference = quoteRateBN
            .dividedBy(marketingRate)
            .minus(1)
            .multipliedBy(100);
          if (difference.absoluteValue().gte(swapRateDifferenceMin)) {
            let unit = ESwapRateDifferenceUnit.POSITIVE;
            if (difference.isNegative()) {
              if (difference.lte(swapRateDifferenceMax)) {
                unit = ESwapRateDifferenceUnit.NEGATIVE;
              } else {
                unit = ESwapRateDifferenceUnit.DEFAULT;
              }
            }
            rateDifferenceRes = {
              value: `(${difference.isPositive() ? '+' : ''}${
                numberFormat(difference.toFixed(), {
                  formatter: 'priceChange',
                }) as string
              })`,
              unit,
            };
          }
          if (quoteRateBN.isZero()) {
            alertsRes = [
              ...alertsRes,
              {
                message: appLocale.intl.formatMessage(
                  { id: ETranslations.swap_page_alert_value_drop },
                  { number: '100%' },
                ),
                alertLevel: ESwapAlertLevel.WARNING,
              },
            ];
          } else if (difference.lt(swapRateDifferenceMax)) {
            alertsRes = [
              ...alertsRes,
              {
                message: appLocale.intl.formatMessage(
                  {
                    id: ETranslations.swap_page_alert_value_drop,
                  },
                  {
                    number: numberFormat(difference.absoluteValue().toFixed(), {
                      formatter: 'priceChange',
                    }) as string,
                  },
                ),
                alertLevel: ESwapAlertLevel.WARNING,
              },
            ];
          }
        }
      }

      const fromTokenAmountBN = new BigNumber(fromTokenAmount);
      // check min max amount
      if (quoteResult && quoteResult.limit?.min) {
        const minAmountBN = new BigNumber(quoteResult.limit.min);
        if (fromTokenAmountBN.lt(minAmountBN)) {
          alertsRes = [
            ...alertsRes,
            {
              message: appLocale.intl.formatMessage(
                {
                  id: ETranslations.swap_page_alert_minimum_amount,
                },
                {
                  number: minAmountBN.toFixed(),
                  symbol: fromToken?.symbol ?? 'unknown',
                },
              ),

              alertLevel: ESwapAlertLevel.ERROR,
              inputShowError: true,
            },
          ];
        }
      }
      if (quoteResult && quoteResult.limit?.max) {
        const maxAmountBN = new BigNumber(quoteResult.limit.max);
        if (fromTokenAmountBN.gt(maxAmountBN)) {
          alertsRes = [
            ...alertsRes,
            {
              message: appLocale.intl.formatMessage(
                {
                  id: ETranslations.swap_page_alert_maximum_amount,
                },
                {
                  number: maxAmountBN.toFixed(),
                  symbol: fromToken?.symbol ?? 'unknown',
                },
              ),
              alertLevel: ESwapAlertLevel.ERROR,
              inputShowError: true,
            },
          ];
        }
      }

      const fromTokenPriceBN = new BigNumber(fromToken?.price ?? 0);
      const tokenFiatValueBN = fromTokenAmountBN.multipliedBy(fromTokenPriceBN);

      const gasFeeBN = new BigNumber(
        quoteResult?.fee?.estimatedFeeFiatValue ?? 0,
      );
      if (
        !(tokenFiatValueBN.isNaN() || tokenFiatValueBN.isZero()) &&
        gasFeeBN.gt(tokenFiatValueBN)
      ) {
        alertsRes = [
          ...alertsRes,
          {
            message: appLocale.intl.formatMessage({
              id: ETranslations.swap_page_alert_fee_exceeds_amount,
            }),
            alertLevel: ESwapAlertLevel.WARNING,
          },
        ];
      }

      set(swapAlertsAtom(), alertsRes);
      set(rateDifferenceAtom(), rateDifferenceRes);
    },
  );

  loadSwapSelectTokenDetail = contextAtomMethod(
    async (
      get,
      set,
      type: ESwapDirectionType,
      swapAddressInfo: ReturnType<typeof useSwapAddressInfo>,
      fetchBalance?: boolean,
    ) => {
      const token =
        type === ESwapDirectionType.FROM
          ? get(swapSelectFromTokenAtom())
          : get(swapSelectToTokenAtom());
      const accountAddress = swapAddressInfo.address;
      const accountNetworkId = swapAddressInfo.networkId;
      const accountId = swapAddressInfo.accountInfo?.account?.id;
      let balanceDisplay;
      if (
        token &&
        accountAddress &&
        accountNetworkId &&
        accountNetworkId === token?.networkId
      ) {
        if (
          token.accountAddress === accountAddress &&
          accountNetworkId === token.networkId &&
          token.balanceParsed &&
          !fetchBalance
        ) {
          const balanceParsedBN = new BigNumber(token.balanceParsed ?? 0);
          balanceDisplay = balanceParsedBN.isNaN()
            ? '0.0'
            : balanceParsedBN.toFixed();
        } else {
          try {
            set(swapSelectTokenDetailFetchingAtom(), (pre) => ({
              ...pre,
              [type]: true,
            }));
            // reset balance
            if (type === ESwapDirectionType.FROM) {
              set(swapSelectedFromTokenBalanceAtom(), '');
            } else {
              set(swapSelectedToTokenBalanceAtom(), '');
            }
            const detailInfo =
              await backgroundApiProxy.serviceSwap.fetchSwapTokenDetails({
                networkId: token.networkId,
                accountAddress,
                accountId,
                contractAddress: token.contractAddress,
                direction: type,
              });
            if (detailInfo?.[0]) {
              const balanceParsedBN = new BigNumber(
                detailInfo[0].balanceParsed ?? 0,
              );
              balanceDisplay = balanceParsedBN.isNaN()
                ? '0.0'
                : balanceParsedBN.toFixed();
              if (
                detailInfo[0].price &&
                detailInfo[0].fiatValue &&
                detailInfo[0].balanceParsed
              ) {
                if (type === ESwapDirectionType.FROM) {
                  set(swapSelectFromTokenAtom(), (pre) => {
                    if (pre) {
                      return {
                        ...pre,
                        price: detailInfo[0].price,
                        fiatValue: detailInfo[0].fiatValue,
                        balanceParsed: detailInfo[0].balanceParsed,
                        reservationValue: detailInfo[0].reservationValue,
                        accountAddress,
                      };
                    }
                  });
                } else {
                  set(swapSelectToTokenAtom(), (pre) => {
                    if (pre) {
                      return {
                        ...pre,
                        price: detailInfo[0].price,
                        fiatValue: detailInfo[0].fiatValue,
                        balanceParsed: detailInfo[0].balanceParsed,
                        reservationValue: detailInfo[0].reservationValue,
                        accountAddress,
                      };
                    }
                  });
                }
              }
            }
          } catch (e: any) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (e?.cause !== ESwapFetchCancelCause.SWAP_TOKENS_CANCEL) {
              balanceDisplay = '0.0';
            }
          } finally {
            set(swapSelectTokenDetailFetchingAtom(), (pre) => ({
              ...pre,
              [type]: false,
            }));
          }
        }
      }
      if (type === ESwapDirectionType.FROM) {
        set(swapSelectedFromTokenBalanceAtom(), balanceDisplay ?? '');
      } else {
        set(swapSelectedToTokenBalanceAtom(), balanceDisplay ?? '');
      }
    },
  );
}

const createActions = memoFn(() => new ContentJotaiActionsSwap());

export const useSwapActions = () => {
  const actions = createActions();
  const selectFromToken = actions.selectFromToken.use();
  const selectToToken = actions.selectToToken.use();
  const alternationToken = actions.alternationToken.use();
  const syncNetworksSort = actions.syncNetworksSort.use();
  const catchSwapTokensMap = actions.catchSwapTokensMap.use();
  const recoverQuoteInterval = actions.recoverQuoteInterval.use();
  const quoteAction = actions.quoteAction.use();
  const approvingStateAction = actions.approvingStateAction.use();
  const checkSwapWarning = debounce(actions.checkSwapWarning.use(), 300);
  const tokenListFetchAction = actions.tokenListFetchAction.use();

  const loadSwapSelectTokenDetail = debounce(
    actions.loadSwapSelectTokenDetail.use(),
    200,
  );
  const { cleanQuoteInterval, cleanApprovingInterval, getQuoteIntervalCount } =
    actions;

  return useRef({
    selectFromToken,
    quoteAction,
    selectToToken,
    alternationToken,
    syncNetworksSort,
    catchSwapTokensMap,
    cleanQuoteInterval,
    cleanApprovingInterval,
    approvingStateAction,
    tokenListFetchAction,
    recoverQuoteInterval,
    checkSwapWarning,
    loadSwapSelectTokenDetail,
    getQuoteIntervalCount,
  });
};
