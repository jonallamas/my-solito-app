import { Text, Box, Heading } from 'native-base'

import useFormatPrice from '../../hooks/useFormatPrice'

export function Stat(props) {
  const { title, value } = props
  return (
    <Box {...props}>
      <Text color="rgba(243, 244, 246, 0.6)" fontSize="16px">
        {title}
      </Text>
      <Heading color="#F3F4F6" fontSize="36px">
        {useFormatPrice(value)}
      </Heading>
    </Box>
  )
}
