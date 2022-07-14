import { VStack, Text, Box, Heading } from 'native-base'

export function Slide({ number, icon, title, description }) {
  return (
    <VStack space={4} flex={1} justifyContent="center">
      <Box mb="32px">{icon}</Box>
      <Heading color="#fff" fontSize="24px">
        {number}. {title}
      </Heading>
      <Text color="rgba(243, 244, 246, 0.6)" fontSize="16px">
        {description}
      </Text>
    </VStack>
  )
}
