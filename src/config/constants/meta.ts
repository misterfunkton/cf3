import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ChadFarm',
  description:
    'The most popular AMM on BSC by user count! Earn ChadFarm through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ChadFarm), NFTs, and more, on a platform you can trust.',
  image: 'https://chadfarm.biz/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ChadFarm')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ChadFarm')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ChadFarm')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ChadFarm')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ChadFarm')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ChadFarm')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ChadFarm')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ChadFarm')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ChadFarm')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ChadFarm')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ChadFarm')}`,
      }
    default:
      return null
  }
}
