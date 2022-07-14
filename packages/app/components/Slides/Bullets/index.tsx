import { Box, HStack } from 'native-base'

export function Bullets({ value }) {
  return (
    <HStack space="16px">
      <Box
        height="10px"
        width="10px"
        borderRadius="6px"
        background={value >= 0 ? '#16A34A' : 'rgba(255, 255, 255, 0.05)'}
        justifyContent="center"
      >
        <Box
          ml="10px"
          height="2px"
          width="16px"
          background={value >= 1 ? '#16A34A' : 'rgba(255, 255, 255, 0.05)'}
        ></Box>
      </Box>
      <Box
        height="10px"
        width="10px"
        borderRadius="6px"
        background={value >= 1 ? '#16A34A' : 'rgba(255, 255, 255, 0.05)'}
        justifyContent="center"
      >
        <Box
          ml="10px"
          height="2px"
          width="16px"
          background={value >= 2 ? '#16A34A' : 'rgba(255, 255, 255, 0.05)'}
        ></Box>
      </Box>
      <Box
        height="10px"
        width="10px"
        borderRadius="6px"
        background={value >= 2 ? '#16A34A' : 'rgba(255, 255, 255, 0.05)'}
      />
    </HStack>
  )
}
