import bs58check from 'bs58check';

import type { ExtendedKey } from '@onekeyhq/core/src/secret';
import { BaseBip32KeyDeriver } from '@onekeyhq/core/src/secret/bip32';
import type { Bip32KeyDeriver } from '@onekeyhq/core/src/secret/bip32';
import { secp256k1 } from '@onekeyhq/core/src/secret/curves';
import { decrypt, encrypt } from '@onekeyhq/core/src/secret/encryptors/aes256';
import type { SignedTx } from '@onekeyhq/engine/src/types/provider';
import { OneKeyInternalError } from '@onekeyhq/shared/src/errors';
import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';
import { checkIsDefined } from '@onekeyhq/shared/src/utils/assertUtils';
import bufferUtils from '@onekeyhq/shared/src/utils/bufferUtils';

import { AccountType } from '../../../types/account';
import { KeyringImportedBase } from '../../keyring/KeyringImportedBase';

import { AddressEncodings } from './types';
import { initBitcoinEcc } from './utils';
import btcForkSignUtils from './utils/btcForkSignUtils';

import type { ChainSigner } from '../../../proxy';
import type { DBAccount, DBUTXOAccount } from '../../../types/account';
import type {
  IPrepareAccountsParams,
  IPrepareImportedAccountsParams,
  ISignCredentialOptions,
  ISignedTxPro,
  IUnsignedTxPro,
} from '../../types';
import type BTCForkVault from './VaultBtcFork';

const deriver = new BaseBip32KeyDeriver(
  Buffer.from('Bitcoin seed'),
  secp256k1,
) as Bip32KeyDeriver;

export abstract class KeyringImportedBtcFork extends KeyringImportedBase {
  async basePrepareAccountsImportedBtc(
    params: IPrepareImportedAccountsParams,
  ): Promise<DBUTXOAccount[]> {
    if (!this.coreApi) {
      throw new Error('coreApi is empty');
    }
    initBitcoinEcc();
    const { privateKey, name, template } = params;

    const COIN_TYPE = (this.vault as unknown as BTCForkVault).getCoinType();
    let addressEncoding;
    if (template) {
      if (template.startsWith(`m/44'/`)) {
        addressEncoding = AddressEncodings.P2PKH;
      } else if (template.startsWith(`m/86'/`)) {
        addressEncoding = AddressEncodings.P2TR;
      } else {
        addressEncoding = undefined;
      }
    }

    const chainCode = (await this.getChainInfo()).code;

    const privateKeyRaw = bufferUtils.bytesToHex(privateKey);
    const { xpub, xpubSegwit, publicKey, address, addresses } =
      await this.coreApi.getAddressFromPrivate({
        networkInfo: await this.baseGetCoreApiNetworkInfo(),
        template,
        privateKeyRaw,
      });

    if (!xpub || !addresses) {
      throw new Error('xpub is empty');
    }

    return Promise.resolve([
      {
        id: `imported--${COIN_TYPE}--${xpub}--${
          addressEncoding === AddressEncodings.P2TR ? `86'/` : ''
        }`,
        name: name || '',
        type: AccountType.UTXO,
        path: '',
        coinType: COIN_TYPE,
        pubKey: publicKey,
        xpub,
        xpubSegwit,
        address,
        addresses,
      },
    ]);
  }
}