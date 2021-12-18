import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'ChadFarm',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x08fAfc24cfcfAC3712952B697CBD466a09C7D0b2',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ChadFarm-BNB LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x859f3ee301e936fecf19f972a448144128d39793',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'SantaSack-BNB LP',
    lpAddresses: {
      96: '',
      56: '0xaA300Cdc4eAEa17ff5f5c044d99142f2A121e444',
    },
    token: tokens.santa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'DOBO-BNB LP',
    lpAddresses: {
      96: '',
      56: '0xBE80839a3BE4D3953D5588A60a11aEAED286b593',
    },
    token: tokens.dobo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'mQQQ-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x7317b606d0ed3e869df28bc88582119a5bf09228',
    },
    token: tokens.mqqq,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: '877CASHNOW-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x384221b328e9A7f740eB71D0f4E6a8b57B9492F9',
    },
    token: tokens.cash877,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'CXYZ-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x6aA3e89089153b27a5943149557a1A80b2e527F6',
    },
    token: tokens.coinchan,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'MILKERS-BNB LP',
    lpAddresses: {
      96: '',
      56: '0xA92e6A5262a0EA4B61FCfd2748600de4ab650875',
    },
    token: tokens.mummy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'BITCOIN-BNB LP',
    lpAddresses: {
      96: '',
      56: '0xd1EB9F7E21C1060AbB985b116bC20732Fb7360c1',
    },
    token: tokens.harry,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms
