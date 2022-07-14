import { useState, useLayoutEffect, useEffect } from 'react'
import { VStack, Box, Heading, Divider, HStack } from 'native-base'

import { Viewport, Card, Currency, Navbar } from '../../components'

export function DashboardScreen(props) {
  const { navigation } = props

  // Component
  const [coins, setCoins] = useState([])

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => <></>,
    })
  }, [navigation])

  // Fetch data
  useEffect(() => {
    checkStatusAsync()
  }, [])

  const checkStatusAsync = async () => {
    const URL =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10'
    const data = await fetch(URL).then((res) => res.json())

    if (data) {
      setCoins(data)
    }
  }

  // if (!coins.length) return null

  return (
    <HStack>
      <Navbar />
      <Viewport>
        <VStack flexDirection="column">
          {/* Principal */}
          <Card />

          {/* List coins */}
          <Box mt="32px">
            <Heading size="md" color="#fff" mb="4px">
              Cryptocurrencies
            </Heading>

            <Divider my="16px" backgroundColor="rgba(255, 255, 255, 0.1)" />

            {/* Coin */}
            {coins?.length &&
              coins?.map((coin, key) => <Currency key={key} coin={coin} />)}
          </Box>
        </VStack>
      </Viewport>
    </HStack>
  )
}
