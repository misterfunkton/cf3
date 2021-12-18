import React from 'react'
import { Heading, Flex, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Stats = () => {
  const { t } = useTranslation()
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl">
        {t('Join your fellow farmers and stake your shitcoins with ChadFarm.')}
      </Heading>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('There are no greener pastures.')}
      </Text>
    </Flex>
  )
}

export default Stats
