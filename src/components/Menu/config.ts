import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },{
        label: t('Bridge'),
        href: 'https://www.binance.org/en/bridge',
      },
      
    ],
  },
  {
    label: t('Chad Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Chad Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Farm Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Telegram'),
        href: 'https://t.me/ChadFarmBSC',
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/CryptoShill3000?t=Ru3P9rh1kb0R7Am6Y-1ZEQ&s=09',
      }
    ],
  },
]

export default config
