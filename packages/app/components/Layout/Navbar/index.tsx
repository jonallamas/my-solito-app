import { Platform, Dimensions } from 'react-native'
import { Link } from 'solito/link'
import { VStack, Text, Box, View, HStack } from 'native-base'

import Logo from '../../Shared/Logo'
import Home from '../../Icons/Home'

export function Navbar() {
  console.log('Dimensions', Dimensions.get('window'))
  return (
    <View
      display={Dimensions.get('window').width <= 768 ? 'none' : 'flex'}
      position={Platform.OS === 'web' ? 'relative' : 'absolute'}
      bottom={0}
      height="100%"
      width="100%"
      maxW="280px"
      background="#2B2D31"
    >
      <VStack position={Platform.OS === 'web' ? 'fixed' : 'relative'} p="32px">
        <Box mb="32px">
          <Logo width={100} />
        </Box>
        <Link href="/dashboard">
          <HStack height="56px" space={2} alignItems="center">
            <Home color="rgba(255, 255, 255, 0.1)" />
            <Text color="#fff">Home</Text>
          </HStack>
        </Link>
      </VStack>
    </View>
  )
}
