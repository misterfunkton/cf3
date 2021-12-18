import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Flex } from '@pancakeswap/uikit'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import useGetTopPoolsByApr from 'views/Home/hooks/useGetTopPoolsByApr'

const FarmsPoolsRow = () => {
  const [showFarms, setShowFarms] = useState(false)
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { topFarms } = useGetTopFarmsByApr(isIntersecting)
  const { topPools } = useGetTopPoolsByApr(isIntersecting)

  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const isLoaded = topFarms[0] && topPools[0]

  const startTimer = useCallback(() => {
    timer.current = setInterval(() => {
      setShowFarms((prev) => !prev)
    }, 6000)
  }, [timer])

  useEffect(() => {
    if (isLoaded) {
      startTimer()
    }

    return () => {
      clearInterval(timer.current)
    }
  }, [timer, isLoaded, showFarms, startTimer])

  return (
    <div ref={observerRef}>
      <Flex flexDirection="column" mt="24px" />
    </div>
  )
}

export default FarmsPoolsRow
