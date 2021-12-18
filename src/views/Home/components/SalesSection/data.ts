import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Take a chance in the ChadFarm lottery.',
  bodyText: 'Buy tickets to increase your chance of winning the lottery pot. 20% of the lottery pot supply is burned upon distribution.',
  reverse: false,
  primaryButton: {
    to: '/lottery',
    text: 'Get Tickets',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Make your shitcoins work for you.',
  bodyText: 'ChadFarm makes it simple to stake your shitcoins for tasty yields.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Start Farming',
    external: false,
  },
 
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'ChadFarm Buybacks',
  bodyText:
    'Starting January 1st, buybacks will begin using collected staking fees.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x08fAfc24cfcfAC3712952B697CBD466a09C7D0b2',
    text: 'Buy ChadFarm',
    external: false,
  },


  images: {
    path: '/images/home/',
    attributes: [
      { src: 'coin', alt: 'ChadFarm token' }
    ],
  },
}
