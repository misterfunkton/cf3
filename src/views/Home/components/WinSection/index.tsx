import React from 'react'
import styled from 'styled-components'

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const WinSection = () => {
  return (
    <>
      <BgWrapper />
    </>
  )
}

export default WinSection
