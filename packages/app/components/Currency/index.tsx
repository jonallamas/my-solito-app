import { Link } from 'solito/link'
import { Image, Text, Box, HStack } from 'native-base'

import ArrowDownIcon from '../Icons/ArrowDownRight'
import ArrowUpIcon from '../Icons/ArrowUpRight'

import useFormatPrice from '../../hooks/useFormatPrice'

export function Currency({ coin }) {
  return (
    <Link href={`/coin/${coin?.id}`}>
      <HStack alignItems="center" justifyContent="center" space={4} py="16px">
        <Box height="32px" width="32px" p="4px" borderRadius={50}>
          <Image
            height="100%"
            width="100%"
            source={{
              uri: coin?.image,
            }}
            alt="Alternate Text"
          />
        </Box>
        <Text flex={1} fontSize="16px" fontWeight="600" color="#F3F4F6">
          {coin?.name}
        </Text>
        <Box>
          <Text color="#F3F4F6" fontWeight={600} textAlign="right">
            {useFormatPrice(coin?.current_price)}
          </Text>
          <HStack alignItems="center" justifyContent="flex-end" space={2}>
            {coin?.price_change_percentage_24h > 0 ? (
              <>
                <ArrowUpIcon color="#16A34A" size={8} />
                <Text
                  color="rgba(243, 244, 246, 0.6)"
                  fontSize="14px"
                  textAlign="right"
                >
                  {coin?.price_change_percentage_24h.toFixed(1)}%
                </Text>
              </>
            ) : (
              <>
                <ArrowDownIcon color="#EF4444" size={8} />
                <Text
                  color="rgba(243, 244, 246, 0.6)"
                  fontSize="14px"
                  textAlign="right"
                >
                  {coin?.price_change_percentage_24h.toFixed(1)}%
                </Text>
              </>
            )}
          </HStack>
        </Box>
      </HStack>
    </Link>
  )
}
