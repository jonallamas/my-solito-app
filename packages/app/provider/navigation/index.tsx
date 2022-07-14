import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#191A1C',
    color: '#FFFFFF',
  },
}

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      theme={navTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              dashboard: 'dashboard',
              coin: 'coin/:id',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
