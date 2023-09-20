import CoreChainAlgo from '../chains/algo';
import CoreChainApt from '../chains/apt';
import CoreChainBch from '../chains/bch';
import CoreChainBtc from '../chains/btc';
import CoreChainCfx from '../chains/cfx';
import CoreChainCosmos from '../chains/cosmos';
import CoreChainDoge from '../chains/doge';
import CoreChainEvm from '../chains/evm';
import CoreChainLtc from '../chains/ltc';

export class CoreChainApiHub {
  evm = new CoreChainEvm();

  btc = new CoreChainBtc();

  bch = new CoreChainBch();

  ltc = new CoreChainLtc();

  doge = new CoreChainDoge();

  algo = new CoreChainAlgo();

  apt = new CoreChainApt();

  cfx = new CoreChainCfx();

  cosmos = new CoreChainCosmos();
}
