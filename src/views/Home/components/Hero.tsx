import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Link, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`
const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('CHADFARM.')}
          </Heading>
          <Heading scale="lg" color="secondary" mb="12px">
            {t('STAKE. POOL. FARM. YIELD.')}
          </Heading>
          <Heading scale="md" color="secondary" mb="48px">
            {t('The words a Chad Farmer lives by.')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <Link mr="16px" href="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src="/chadplow.png" alt={t('image 1')} width="2000" height="600" />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
