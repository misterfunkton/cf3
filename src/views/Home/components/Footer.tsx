import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Start now!')}
        </Heading>
        <Text textAlign="center" color="white">
          {t('Connect your crypto wallet to start using the app in seconds.')}
        </Text>
        <Text mb="24px" bold color="white">
          {t('No registration needed.')}
        </Text>

        {!account && <ConnectWalletButton mt="24px" />}
      </Wrapper>
    </>
  )
}

export default Footer
