/* eslint-disable @typescript-eslint/no-unused-vars */
import BigNumber from 'bignumber.js';

import { getMoneroApi } from '@onekeyhq/core/src/chains/xmr/sdkXmr';
import { MoneroNetTypeEnum } from '@onekeyhq/core/src/chains/xmr/sdkXmr/moneroUtil/moneroUtilTypes';
import { decrypt } from '@onekeyhq/core/src/secret/encryptors/aes256';
import { getTimeDurationMs } from '@onekeyhq/kit/src/utils/helper';
import {
  InvalidAddress,
  OneKeyInternalError,
  WrongPassword,
} from '@onekeyhq/shared/src/errors';
import { JsonRPCRequest } from '@onekeyhq/shared/src/request/JsonRPCRequest';
import bufferUtils from '@onekeyhq/shared/src/utils/bufferUtils';
import { memoizee } from '@onekeyhq/shared/src/utils/cacheUtils';

import simpleDb from '../../../dbs/simple/simpleDb';
import { isAccountCompatibleWithNetwork } from '../../../managers/account';
import { AccountCredentialType } from '../../../types/account';
import {
  IDecodedTxActionType,
  IDecodedTxDirection,
  IDecodedTxStatus,
  IEncodedTxUpdateType,
} from '../../types';
import { VaultBase } from '../../VaultBase';

import { ClientXmr } from './ClientXmr';
import { KeyringHardware } from './KeyringHardware';
import { KeyringHd } from './KeyringHd';
import { KeyringImported } from './KeyringImported';
import { KeyringWatching } from './KeyringWatching';
import settings from './settings';
import { MoneroTxPriorityEnum } from './types';
import { getDecodedTxStatus } from './utils';

import type { Account, DBVariantAccount } from '../../../types/account';
import type {
  PartialTokenInfo,
  TransactionStatus,
} from '../../../types/provider';
import type {
  IApproveInfo,
  IDecodedTx,
  IDecodedTxLegacy,
  IEncodedTx,
  IEncodedTxUpdateOptions,
  IEncodedTxUpdatePayloadTransfer,
  IFeeInfo,
  IFeeInfoUnit,
  IHistoryTx,
  ISignedTxPro,
  ITransferInfo,
  IUnsignedTxPro,
} from '../../types';
import type { IClientApi, IEncodedTxXmr, IOnChainHistoryTx } from './types';

export default class Vault extends VaultBase {
  keyringMap = {
    hd: KeyringHd,
    hw: KeyringHardware,
    imported: KeyringImported,
    watching: KeyringWatching,
    external: KeyringWatching,
  };

  override validateTokenAddress(address: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  override getTransactionStatuses(
    txids: string[],
  ): Promise<(TransactionStatus | undefined)[]> {
    // ClientXmr not support yet
    throw new Error('Method not implemented.');
  }

  settings = settings;

  private getPrivateKey = memoizee(
    async (
      accountId: string,
      password?: string,
      passwordLoadedCallback?: (isLoaded: boolean) => void,
    ) => {
      try {
        const psw = password || '';
        const privateKeysMap = await (
          this.keyring as KeyringImported
        ).getPrivateKeys({
          password: psw,
        });
        const [privateKey] = Object.values(privateKeysMap);
        const rawPrivateKey: string | Buffer = decrypt(
          psw,
          privateKey,
        ).toString('hex');

        passwordLoadedCallback?.(true);
        return rawPrivateKey;
      } catch (e) {
        if (e instanceof WrongPassword) {
          passwordLoadedCallback?.(false);
        }
        throw e;
      }
    },
    {
      max: 1,
      promise: true,
      maxAge: getTimeDurationMs({ minute: 5 }),
    },
  );

  private getMoneroKeys = memoizee(
    async (accountId: string, rawPrivateKey: string, index?: number) => {
      const moneroApi = await getMoneroApi();

      const isImportedAccount = accountId.startsWith('imported');

      let accountIndex = 0;
      if (!isImportedAccount) {
        accountIndex =
          index === undefined
            ? parseInt(accountId.split('/').pop() ?? '0')
            : index;
      }

      const result = await moneroApi.getKeyPairFromRawPrivatekey({
        rawPrivateKey,
        isPrivateSpendKey: isImportedAccount,
        index: accountIndex,
      });
      return result;
    },
    {
      max: 1,
      primitive: true,
      maxAge: getTimeDurationMs({ minute: 3 }),
      promise: true,
    },
  );

  private getRpcClient = memoizee(
    async (url?: string) => {
      const rpcUrl = await this.getRpcUrl();
      const rpc = new JsonRPCRequest(`${url ?? rpcUrl}/json_rpc`);
      return rpc;
    },
    {
      primitive: true,
      promise: true,
      maxAge: getTimeDurationMs({ minute: 3 }),
    },
  );

  private async getClient({
    password,
    accountId,
    address,
    passwordLoadedCallback,
  }: {
    password?: string;
    accountId?: string;
    address?: string;
    passwordLoadedCallback?: (isLoaded: boolean) => void;
  }): Promise<ClientXmr> {
    let accountAddress = address;
    if (!accountAddress) {
      accountAddress = (await this.getOutputAccount()).address;
    }
    const rpcUrl = await this.getRpcUrl();
    const clientApi = await this.getClientApi<IClientApi>();
    const privateKey = await this.getPrivateKey(
      accountId ?? this.accountId,
      password,
      passwordLoadedCallback,
    );
    const { publicSpendKey, publicViewKey, privateSpendKey, privateViewKey } =
      await this.getMoneroKeys(accountId ?? this.accountId, privateKey);
    return this.createXmrClient(
      rpcUrl,
      clientApi.mymonero,
      address ?? accountAddress,
      publicSpendKey || '',
      publicViewKey || '',
      privateSpendKey,
      privateViewKey,
    );
  }

  private createXmrClient = memoizee(
    (
      rpcUrl: string,
      scanUrl: string,
      address: string,
      publicSpendKey: string,
      publicViewKey: string,
      privateSpendKey: string,
      privateViewKey: string,
    ) =>
      new ClientXmr({
        rpcUrl,
        scanUrl,
        address,
        publicSpendKey,
        publicViewKey,
        privateSpendKey,
        privateViewKey,
      }),
    {
      max: 1,
      primitive: true,
      maxAge: getTimeDurationMs({ minute: 3 }),
    },
  );

  async buildEncodedTxFromTransfer(
    transferInfo: ITransferInfo,
  ): Promise<IEncodedTxXmr> {
    if (!transferInfo.to) {
      throw new Error('Invalid transferInfo.to params');
    }
    const network = await this.getNetwork();

    return {
      destinations: [
        {
          to_address: transferInfo.to,
          send_amount: transferInfo.amount,
        },
      ],
      priority: MoneroTxPriorityEnum.FAST,
      address: transferInfo.from,
      nettype: network.isTestnet
        ? MoneroNetTypeEnum.TestNet
        : MoneroNetTypeEnum.MainNet,
      paymentId: '',
      shouldSweep: false,
    };
  }

  async fetchFeeInfo(encodedTx: IEncodedTxXmr): Promise<IFeeInfo> {
    const rpc = await this.getRpcClient();
    const moneroApi = await getMoneroApi();
    const network = await this.engine.getNetwork(this.networkId);

    const { fee } = await rpc.call<{ fee: number; fees: number[] }>(
      'get_fee_estimate',
    );

    const finalFee = await moneroApi.estimatedTxFee({
      priority: String(encodedTx.priority),
      feePerByte: String(fee),
    });

    const limit = new BigNumber(finalFee ?? 0)
      .dividedToIntegerBy(fee)
      .toFixed();
    const price = fee;

    return {
      customDisabled: true,
      limit,
      prices: [
        new BigNumber(price ?? 0).shiftedBy(-network.feeDecimals).toFixed(),
      ],
      defaultPresetIndex: '0',
      feeSymbol: network.feeSymbol,
      feeDecimals: network.feeDecimals,
      nativeSymbol: network.symbol,
      nativeDecimals: network.decimals,
      tx: null, // Must be null if network not support feeInTx
    };
  }

  async updateEncodedTx(
    encodedTx: IEncodedTxXmr,
    payload: IEncodedTxUpdatePayloadTransfer,
    options: IEncodedTxUpdateOptions,
  ): Promise<IEncodedTxXmr> {
    if (options.type === IEncodedTxUpdateType.transfer) {
      encodedTx.destinations[0].send_amount = payload.amount;
      encodedTx.shouldSweep = true;
    }
    return Promise.resolve(encodedTx);
  }

  async decodeTx(encodedTx: IEncodedTxXmr, payload?: any): Promise<IDecodedTx> {
    const network = await this.engine.getNetwork(this.networkId);
    const address = await this.getAccountAddress();
    const token = await this.engine.getNativeTokenInfo(this.networkId);

    const actions = [];

    for (const destination of encodedTx.destinations) {
      actions.push({
        type: IDecodedTxActionType.NATIVE_TRANSFER,
        nativeTransfer: {
          tokenInfo: token,
          from: encodedTx.address,
          to: destination.to_address,
          amount: destination.send_amount,
          amountValue: new BigNumber(destination.send_amount)
            .shiftedBy(network.decimals)
            .toFixed(),
          extraInfo: null,
        },
        direction:
          destination.to_address === address
            ? IDecodedTxDirection.SELF
            : IDecodedTxDirection.OUT,
      });
    }

    const decodedTx: IDecodedTx = {
      txid: encodedTx.tx_hash || '',
      owner: encodedTx.address || address,
      signer: encodedTx.address || address,
      nonce: 0,
      actions,
      status: IDecodedTxStatus.Pending,
      networkId: this.networkId,
      accountId: this.accountId,
      encodedTx,
      payload,
      extraInfo: null,
    };

    return decodedTx;
  }

  async attachFeeInfoToEncodedTx(params: {
    encodedTx: IEncodedTxXmr;
    feeInfoValue: IFeeInfoUnit;
  }): Promise<IEncodedTxXmr> {
    return Promise.resolve(params.encodedTx);
  }

  async buildUnsignedTxFromEncodedTx(
    encodedTx: IEncodedTxXmr,
  ): Promise<IUnsignedTxPro> {
    return Promise.resolve({
      inputs: [],
      outputs: [],
      payload: { encodedTx },
      encodedTx,
    });
  }

  override async getExportedCredential(
    password: string,
    credentialType: AccountCredentialType,
  ): Promise<string> {
    if (
      this.accountId.startsWith('hd-') ||
      this.accountId.startsWith('imported')
    ) {
      const moneroApi = await getMoneroApi();
      const privateKey = await this.getPrivateKey(this.accountId, password);
      const { privateSpendKey, privateViewKey } = await this.getMoneroKeys(
        this.accountId,
        privateKey,
      );
      switch (credentialType) {
        case AccountCredentialType.PrivateSpendKey:
          return privateSpendKey;
        case AccountCredentialType.PrivateViewKey:
          return privateViewKey;
        case AccountCredentialType.Mnemonic:
          return moneroApi.privateSpendKeyToWords(
            bufferUtils.toBuffer(privateSpendKey),
          );
        default:
          return moneroApi.privateSpendKeyToWords(
            bufferUtils.toBuffer(privateSpendKey),
          );
      }
    }

    throw new OneKeyInternalError(
      'Only credential of HD or imported accounts can be exported',
    );
  }

  override async validateAddress(address: string): Promise<string> {
    const moneroApi = await getMoneroApi();
    const network = await this.getNetwork();

    let isValid = false;

    try {
      const result = await moneroApi.decodeAddress({
        address,
        netType: network.isTestnet ? 'TESTNET' : 'MAINNET',
      });

      if (result.err_msg) {
        isValid = false;
      } else {
        isValid = true;
      }
    } catch {
      isValid = false;
    }
    const normalizedAddress = isValid ? address.toLowerCase() : undefined;

    if (!isValid || typeof normalizedAddress === 'undefined') {
      throw new InvalidAddress();
    }
    return Promise.resolve(normalizedAddress);
  }

  override async fetchOnChainHistory(options: {
    tokenIdOnNetwork?: string;
    localHistory: IHistoryTx[];
    password: string;
    passwordLoadedCallback?: (isLoaded: boolean) => void;
  }): Promise<IHistoryTx[]> {
    const { localHistory, password, passwordLoadedCallback } = options;
    const client = await this.getClient({
      password,
      passwordLoadedCallback,
    });
    const network = await this.getNetwork();

    const address = await this.getAccountAddress();
    const token = await this.engine.getNativeTokenInfo(this.networkId);
    let txs: IOnChainHistoryTx[] = [];
    let currentHeight = 0;
    try {
      const result = await client.getHistory(address);
      txs = result.txs;
      currentHeight = result.blockHeight;
    } catch (e) {
      console.error(e);
    }

    const promises = txs.map(async (tx) => {
      try {
        const historyTxToMerge = localHistory.find(
          (item) => item.decodedTx.txid === tx.hash,
        );
        if (historyTxToMerge && historyTxToMerge.decodedTx.isFinal) {
          return null;
        }
        const amountBN = new BigNumber(tx.amount);

        let from = '';
        let to = '';
        let direction = IDecodedTxDirection.OTHER;
        const isIn = amountBN.isPositive();

        if (isIn) {
          direction = IDecodedTxDirection.IN;
          from = 'unknown';
          to = address;
        } else {
          direction = IDecodedTxDirection.OUT;
          from = address;
          to =
            (historyTxToMerge?.isLocalCreated &&
              historyTxToMerge.decodedTx.actions[0].nativeTransfer?.to) ||
            'unknown';
        }

        const decodedTx: IDecodedTx = {
          txid: tx.hash ?? '',
          owner: address,
          signer: isIn ? 'unknown' : address,
          nonce: 0,
          actions: [
            {
              type: IDecodedTxActionType.NATIVE_TRANSFER,
              direction,
              nativeTransfer: {
                tokenInfo: token,
                from,
                to,
                amount: amountBN.shiftedBy(-token.decimals).abs().toFixed(),
                amountValue: amountBN.abs().toFixed(),
                extraInfo: null,
              },
            },
          ],
          status: getDecodedTxStatus(tx, currentHeight),
          totalFeeInNative:
            tx.fee === undefined
              ? undefined
              : new BigNumber(tx.fee).shiftedBy(-network.decimals).toFixed(),
          networkId: this.networkId,
          accountId: this.accountId,
          extraInfo: historyTxToMerge?.decodedTx.extraInfo,
        };
        decodedTx.updatedAt = new Date(tx.timestamp).getTime();
        decodedTx.createdAt =
          historyTxToMerge?.decodedTx.createdAt ?? decodedTx.updatedAt;
        decodedTx.isFinal = decodedTx.status === IDecodedTxStatus.Confirmed;
        return await this.buildHistoryTx({
          decodedTx,
          historyTxToMerge,
        });
      } catch (e) {
        console.error(e);
        return Promise.resolve(null);
      }
    });

    return (await Promise.all(promises)).filter(Boolean);
  }

  override async getOutputAccount(): Promise<Account> {
    const dbAccount = (await this.getDbAccount({
      noCache: true,
    })) as DBVariantAccount;
    const ret = {
      id: dbAccount.id,
      name: dbAccount.name,
      type: dbAccount.type,
      path: dbAccount.path,
      coinType: dbAccount.coinType,
      tokens: [],
      address: dbAccount.addresses?.[this.networkId] || '',
      template: dbAccount.template,
    };
    if (
      ret.address.length === 0 &&
      isAccountCompatibleWithNetwork(dbAccount.id, this.networkId)
    ) {
      try {
        const address = await this.addressFromBase(dbAccount);

        ret.address = address;

        await this.engine.dbApi.updateAccountAddresses(
          dbAccount.id,
          this.networkId,
          address,
        );
      } catch {
        // pass
      }
    }
    return ret;
  }

  override async getAccountAddress() {
    const { address } = await this.getOutputAccount();
    return address;
  }

  override async addressFromBase(account: DBVariantAccount) {
    const moneroApi = await getMoneroApi();
    const { isTestnet } = await this.getNetwork();
    const [publicSpendKey, publicViewKey] = account.pub.split(',');
    const isSubaddress = account.id.startsWith('imported')
      ? false
      : parseInt(account.path.split('/').pop() ?? '0') !== 0;

    return moneroApi.pubKeysToAddress(
      isTestnet ? MoneroNetTypeEnum.TestNet : MoneroNetTypeEnum.MainNet,
      isSubaddress,
      Buffer.from(publicSpendKey, 'hex'),
      Buffer.from(publicViewKey, 'hex'),
    );
  }

  override async getBalances(
    requests: Array<{
      address: string;
      tokenAddress?: string;
      accountId?: string;
    }>,
    password: string,
    passwordLoadedCallback?: (isLoaded: boolean) => void,
  ): Promise<(BigNumber | undefined)[]> {
    const [request] = requests;
    const client = await this.getClient({
      password,
      accountId: request.accountId,
      address: request.address,
      passwordLoadedCallback,
    });

    return client.getBalances([
      {
        address: request.address,
        coin: {},
      },
    ]);
  }

  override async broadcastTransaction(
    signedTx: ISignedTxPro,
  ): Promise<ISignedTxPro> {
    return Promise.resolve(signedTx);
  }

  override async getClientEndpointStatus(
    url: string,
  ): Promise<{ responseTime: number; latestBlock: number }> {
    const rpc = await this.getRpcClient(url);
    const start = performance.now();
    const resp = await rpc.call<{ block_header: { height: number } }>(
      'get_last_block_header',
    );
    return {
      responseTime: Math.floor(performance.now() - start),
      latestBlock: resp.block_header.height,
    };
  }

  override async getFrozenBalance({ password }: { password?: string } = {}) {
    const client = await this.getClient({
      password,
    });
    const { address } = await this.getOutputAccount();
    const { decimals } = await this.engine.getNativeTokenInfo(this.networkId);
    try {
      const [totalBN] = await client.getBalances([
        {
          address,
          coin: {},
        },
      ]);
      const unspentBN = await client.getUnspentBalance(address);

      let frozenBalance = totalBN
        ?.minus(unspentBN)
        .shiftedBy(-decimals)
        .toNumber();

      if (totalBN?.isGreaterThan(0) && unspentBN.isZero()) {
        frozenBalance = -1;
      }

      if (frozenBalance === 0) {
        // The interface for obtaining the frozen amount has a delay.
        // If another request is sent immediately after sending one, an error will occur.
        // Here, check whether the first ten local transactions have transfer-out transactions in the pending state as a supplement to the interface delay
        // If there are any, all amounts will be frozen.
        let hasLocalTxOutInPending = false;
        const localHistory = (
          await simpleDb.history.getAccountHistory({
            accountId: this.accountId,
            networkId: this.networkId,
            isPending: true,
            limit: 10,
          })
        ).items;

        for (let i = 0, len = localHistory.length; i < len; i = +1) {
          const item = localHistory[i];
          const action = item.decodedTx.actions[0];
          if (
            action.type === IDecodedTxActionType.NATIVE_TRANSFER &&
            (IDecodedTxDirection.OUT === action.direction ||
              IDecodedTxDirection.SELF === action.direction)
          ) {
            hasLocalTxOutInPending = true;
            break;
          }
        }
        if (hasLocalTxOutInPending) {
          frozenBalance = -1;
        }
      }

      return frozenBalance ?? 0;
    } catch {
      return 0;
    }
  }

  override async getPrivateKeyByCredential(
    credential: string,
  ): Promise<Buffer | undefined> {
    const moneroApi = await getMoneroApi();
    const network = await this.getNetwork();
    const resp = await moneroApi.seedAndkeysFromMnemonic({
      mnemonic: credential,
      netType: network.isTestnet ? 'TESTNET' : 'MAINNET',
    });

    return Buffer.from(resp.seed, 'hex');
  }

  override async validateImportedCredential(input: string): Promise<boolean> {
    if (this.settings.importedAccountEnabled) {
      const moneroApi = await getMoneroApi();
      const network = await this.getNetwork();
      try {
        const resp = await moneroApi.seedAndkeysFromMnemonic({
          mnemonic: input,
          netType: network.isTestnet ? 'TESTNET' : 'MAINNET',
        });
        if (resp.err_msg) {
          return await Promise.resolve(false);
        }
        return await Promise.resolve(true);
      } catch (e) {
        return Promise.resolve(false);
      }
    }
    return Promise.resolve(false);
  }

  decodedTxToLegacy(decodedTx: IDecodedTx): Promise<IDecodedTxLegacy> {
    return Promise.resolve({} as IDecodedTxLegacy);
  }

  buildEncodedTxFromApprove(approveInfo: IApproveInfo): Promise<IEncodedTx> {
    throw new Error('Method not implemented.');
  }

  updateEncodedTxTokenApprove(
    encodedTx: IEncodedTx,
    amount: string,
  ): Promise<IEncodedTx> {
    throw new Error('Method not implemented.');
  }

  fetchTokenInfos(
    tokenAddresses: string[],
  ): Promise<(PartialTokenInfo | undefined)[]> {
    throw new Error('Method not implemented.');
  }
}