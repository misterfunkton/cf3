import { ChainId, Token } from '@pancakeswap/sdk'

export const ChadFarm: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x08fAfc24cfcfAC3712952B697CBD466a09C7D0b2',
    18,
    'ChadFarm',
    'ChadFarmToken',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'ChadFarm',
    'PancakeSwap Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
// export const USDC = new Token(
//   ChainId.MAINNET,
//   '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
//   18,
//   'USDC',
//   'Binance-Peg USD Coin',
// )

const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'ChadFarm',
    address: {
      56: '0x08fAfc24cfcfAC3712952B697CBD466a09C7D0b2',
      96: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://chadfarm.biz/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      96: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  santa: {
    symbol: 'SantaSack',
    address: {
      56: '0x62cA04eFAFC4F7CC3bc8c3b0Ca5897b53dF8dc9e',
      96: '',
    },
    decimals: 4,
    projectLink: 'https://www.makerdao.com/',
  },
  harry: {
    symbol: 'BITCOIN',
    address: {
      56: '0x4C769928971548eb71A3392EAf66BeDC8bef4B80',
      96: '',
    },
    decimals: 9,
    projectLink: 'https://www.makerdao.com/',
  },
  dobo: {
    symbol: 'DOBO',
    address: {
      56: '0xAe2DF9F730c54400934c06a17462c41C08a06ED8',
      96: '',
    },
    decimals: 9,
    projectLink: 'https://www.makerdao.com/',
  },
  coinchan: {
    symbol: 'CXYZ',
    address: {
      56: '0xE66394D6F22534c5ab8439Cd6270446F562E5eac',
      96: '',
    },
    decimals: 0,
    projectLink: 'https://www.makerdao.com/',
  },
  mummy: {
    symbol: 'MILKERS',
    address: {
      56: '0x3Ebe9333F4240C27b46BED8713C03a2571FDAa12',
      96: '',
    },
    decimals: 9,
    projectLink: 'https://www.makerdao.com/',
  },
  mqqq: {
    symbol: 'mQQQ',
    address: {
      56: '0x1Cb4183Ac708e07511Ac57a2E45A835F048D7C56',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  cash877: {
    symbol: '877CASHNOW',
    address: {
      56: '0x86B906Db460d776EEE3AEd0b5d4CC5B87586cA23',
      96: '',
    },
    decimals: 4,
    projectLink: 'https://www.makerdao.com/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      56: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  twt: {
    symbol: 'TWT',
    address: {
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  link: {
    symbol: 'LINK',
    address: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      56: '0x55d398326f99059fF775485246999027B3197955',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  ust: {
    symbol: 'UST',
    address: {
      56: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  trx: {
    symbol: 'TRX',
    address: {
      56: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  syrup: {
    symbol: 'BRT',
    address: {
      56: '0x3dc7009B09682d261A67BecCB70e7f431c47Ac27',
      96: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  
}

export default tokens
