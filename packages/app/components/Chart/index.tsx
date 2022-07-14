import { Dimensions } from 'react-native'
import { Text, HStack, Badge, View } from 'native-base'
import { LineChart } from 'react-native-chart-kit'

export function Chart({ data }) {
  const { sparkline_7d } = data
  const maxSparkline = sparkline_7d?.price?.length

  return (
    <>
      <View width="100%" mt="32px">
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: sparkline_7d?.price.slice(maxSparkline / 7, maxSparkline),
                color: (opacity = 1) => `#16a34a`,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width + 100}
          height={256}
          withVerticalLines={false}
          withHorizontalLines={true}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundColor: '#000',
            backgroundGradientFrom: '#202225',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#202225',
            backgroundGradientToOpacity: 0,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
              strokeWidth: '1',
              stroke: '#ffa726',
            },
            fillShadowGradientFrom: '#16a34a',
            fillShadowGradientFromOpacity: 0.35,
            fillShadowGradientTo: '#16a34a',
            fillShadowGradientToOpacity: 0,
          }}
          bezier
          style={{
            marginLeft: -110,
          }}
        />
      </View>
      <HStack mb="16px" space={2}>
        <Badge
          py="1.5px"
          px="8px"
          background="rgba(22, 163, 74, 0.2)"
          borderRadius="6px"
        >
          <Text color="#2CC263" fontSize="14px">
            24h
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            7d
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            14d
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            30d
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            90d
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            1y
          </Text>
        </Badge>
        <Badge
          py="1.5px"
          px="8px"
          color="#6A6A73"
          background="rgba(91, 91, 99, 0.2)"
          borderRadius="6px"
        >
          <Text color="#6A6A73" fontSize="14px">
            All
          </Text>
        </Badge>
      </HStack>
    </>
  )
}
