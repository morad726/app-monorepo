import coreChainApi from '@onekeyhq/core/src/instance/coreChainApi';

import { AccountType } from '../../../types/account';
import { KeyringHdBase } from '../../keyring/KeyringHdBase';

import type { ChainSigner } from '../../../proxy';
import type { DBSimpleAccount } from '../../../types/account';
import type { IUnsignedMessageEth } from '../../../types/message';
import type {
  IPrepareHdAccountsParams,
  ISignCredentialOptions,
  ISignedTxPro,
  IUnsignedTxPro,
} from '../../types';

export class KeyringHd extends KeyringHdBase {
  override coreApi = coreChainApi.evm.hd;

  override getSigners(): Promise<Record<string, ChainSigner>> {
    throw new Error('getSigners moved to core.');
  }

  override async getPrivateKeys(query: {
    password: string;
    relPaths?: string[] | undefined;
  }): Promise<Record<string, Buffer>> {
    return this.baseGetPrivateKeys(query);
  }

  override async prepareAccounts(
    params: IPrepareHdAccountsParams,
  ): Promise<Array<DBSimpleAccount>> {
    return this.basePrepareAccountsHd(params, {
      accountType: AccountType.SIMPLE,
      usedIndexes: params.indexes,
    });
  }

  override async signTransaction(
    unsignedTx: IUnsignedTxPro,
    options: ISignCredentialOptions,
  ): Promise<ISignedTxPro> {
    return this.baseSignTransaction(unsignedTx, options);
  }

  override async signMessage(
    messages: IUnsignedMessageEth[],
    options: ISignCredentialOptions,
  ): Promise<string[]> {
    return this.baseSignMessage(messages, options);
  }
}
