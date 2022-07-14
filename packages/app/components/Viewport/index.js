import { VStack, ScrollView, Box } from 'native-base'

export function Viewport(props) {
  const { children } = props

  return (
    <Box flex={1} alignItems="center" background="#191A1C">
      <ScrollView {...props} width="100%" maxW="720px">
        <VStack width="100%" flex="1" color="#F3F4F6" px="16px" py="32px">
          {children}
        </VStack>
      </ScrollView>
    </Box>
  )
}
