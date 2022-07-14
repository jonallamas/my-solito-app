import { Text, Box, Heading } from 'native-base'

export function Card() {
  return (
    <Box width="100%" p="16px" borderRadius="6px" backgroundColor="#202225">
      <Box
        height="32px"
        width="32px"
        mb="16px"
        backgroundColor="violet.100"
        borderRadius={50}
      />
      <Heading size="xl" color="#fff" mb="4px">
        Lorem, ipsum dolor.
      </Heading>

      <Text color="rgba(243, 244, 246, 0.6)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis expedita
        quam doloribus aperiam tempore ipsa!
      </Text>
    </Box>
  )
}
