import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      96: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xf882BEAFc13496c20632B89D57ec8158e48e709e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.btcb,
    earningToken: tokens.cake,
    contractAddress: {
      96: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x4a5a638049c42947fd8550ada68b0021b5f7b216',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.155',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
