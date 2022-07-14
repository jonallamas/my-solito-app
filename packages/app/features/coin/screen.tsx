/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import { createParam } from 'solito'
import { VStack, Text, Box, Heading, Divider, HStack, Image } from 'native-base'

import { Viewport, Stat, Chart, Navbar } from '../../components'

import useFormatPrice from '../../hooks/useFormatPrice'

const { useParam } = createParam<{ id: string }>()

// Interface for Coin
interface CoinInterface {
  name: string
  image: { small: string }
  market_data: {
    market_cap_rank: number
    ath: { usd: number }
    current_price: { usd: number }
    market_cap: { usd: number }
  }
  description: { en: string }
}

export function CoinScreen() {
  const myBalance = 0.54

  // General
  const [id] = useParam('id')

  // Component
  const [coin, setCoin] = useState()

  // Fetch data
  useEffect(() => {
    !coin && checkStatusAsync()
  })

  const checkStatusAsync = async () => {
    if (id) {
      const URL = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&community_data=false&sparkline=true`
      const data = await fetch(URL).then((res) => res.json())

      if (data) {
        setCoin(data)
      }
    }
  }

  if (!coin) return null

  const { name, image, market_data, description }: CoinInterface = coin

  return (
    <HStack>
      <Navbar />
      <Viewport>
        {/* Price */}
        <Stat title="Price" value={market_data?.current_price?.usd} />

        {/* Chart */}
        <Chart data={market_data} />

        <Divider my="16px" backgroundColor="rgba(255, 255, 255, 0.1)" />

        {/* Balance */}
        <Stat
          title="Your balance"
          value={myBalance * market_data?.current_price?.usd}
        />

        <HStack alignItems="center" justifyContent="center" space={4} py="16px">
          <Box height="32px" width="32px" p="4px" borderRadius={50}>
            <Image
              height="100%"
              width="100%"
              source={{
                uri: image?.small,
              }}
              alt="Alternate Text"
            />
          </Box>
          <Text flex={1} fontSize="16px" fontWeight="600" color="#fff">
            Bitcoin
          </Text>
          <Box>
            <Text
              color="#fff"
              fontSize="16px"
              fontWeight={600}
              textAlign="right"
            >
              {useFormatPrice(myBalance * market_data?.current_price?.usd)}
            </Text>
            <Text
              color="rgba(243, 244, 246, 0.6)"
              fontSize="14px"
              textAlign="right"
            >
              {myBalance}
            </Text>
          </Box>
        </HStack>

        <Divider my="16px" backgroundColor="rgba(255, 255, 255, 0.1)" />

        {/* Info */}
        <VStack space={2}>
          <Heading color="#F3F4F6" fontSize="20px">
            About {name}
          </Heading>
          <Text color="rgba(243, 244, 246, 0.6)" fontSize="16px">
            {(description?.en).slice(0, 400)}...
          </Text>
        </VStack>

        <Divider my="16px" backgroundColor="rgba(255, 255, 255, 0.1)" />

        {/* Statics */}
        <VStack space={4}>
          <Heading color="#F3F4F6" fontSize="20px">
            Statistics
          </Heading>
          <Box>
            <HStack justifyContent="space-between" py="8px">
              <Box flex={1}>
                <Heading color="#F3F4F6" fontSize="16px">
                  Rank
                </Heading>
              </Box>
              <Text color="#F3F4F6">#{market_data?.market_cap_rank}</Text>
            </HStack>
            <HStack justifyContent="space-between" py="8px">
              <Box flex={1}>
                <Heading color="#F3F4F6" fontSize="16px">
                  Market cap
                </Heading>
              </Box>
              <Text color="#F3F4F6">
                {useFormatPrice(market_data?.market_cap?.usd)}
              </Text>
            </HStack>
            <HStack justifyContent="space-between" py="8px">
              <Box flex={1}>
                <Heading color="#F3F4F6" fontSize="16px">
                  All-Time High
                </Heading>
              </Box>
              <Text color="#F3F4F6">
                {useFormatPrice(market_data?.ath?.usd)}
              </Text>
            </HStack>
          </Box>
        </VStack>
      </Viewport>
    </HStack>
  )
}
