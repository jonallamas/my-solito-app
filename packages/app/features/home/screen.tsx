/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { Dimensions, Platform } from 'react-native'
import { useRouter } from 'solito/router'
import { VStack } from 'native-base'

import { Viewport, Input, Button, Slides } from '../../components'
import Logo from '../../components/Shared/Logo'

import useValidateEmail from '../../hooks/useValidateEmail'
import useValidatePassword from '../../hooks/useValidatePassword'

export function HomeScreen(props) {
  const { navigation } = props

  // General
  const [showSlider, setShowSlider] = useState(false)

  // Component
  const [email, setEmail] = useState('demo@demo.com')
  const handleChangeEmail = (value) => setEmail(value)

  const [password, setPassword] = useState('123')
  const handleChangePassword = (value) => setPassword(value)

  // Validations
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [passwordInvalid, setPasswordInvalid] = useState(false)

  const { push } = useRouter()

  const handleSignIn = () => {
    const validEmail = useValidateEmail(email)
    const validPassword = useValidatePassword(password)
    if (!validEmail || !validPassword) {
      setEmailInvalid(!validEmail)
      setPasswordInvalid(!validPassword)
      return false
    }

    if (validEmail || validPassword) {
      if (navigation) {
        // for mobile
        setEmail('')
        setEmailInvalid(false)
        setPassword('')
        setPasswordInvalid(false)

        setShowSlider(true)
      } else {
        // for desktop
        push('/dashboard')
      }
    }
  }

  const handleCloseAndNavigate = () => {
    setShowSlider(false)
    navigation?.navigate('dashboard')
  }

  return (
    <>
      <Viewport
        contentContainerStyle={{
          width: '100%',
          height: '100%',
        }}
      >
        <VStack
          width={
            Platform.OS === 'web' || Dimensions?.get('window').width >= 768
              ? '350px'
              : '100%'
          }
          mx="auto"
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          space={4}
        >
          <Logo width={250} />

          {/* Input Email */}
          <Input
            placeholder="john@greener.bio"
            type="email"
            value={email}
            label="Email"
            onChangeText={handleChangeEmail}
            isInvalid={emailInvalid}
          />

          {/* Input Password */}
          <Input
            placeholder="your password"
            type="password"
            value={password}
            label="Password"
            onChangeText={handleChangePassword}
            isInvalid={passwordInvalid}
          />
          <Button onPress={() => handleSignIn()}>Sign in</Button>
        </VStack>
      </Viewport>

      {/* Slide */}
      <Slides show={showSlider} onClose={() => handleCloseAndNavigate()} />
    </>
  )
}
