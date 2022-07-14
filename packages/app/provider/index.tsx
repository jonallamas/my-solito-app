import { NavigationProvider } from './navigation'
import { extendTheme, NativeBaseProvider } from 'native-base'

const themeStyles = {
  // colors: {
  //   brand: {
  //     900: '#8287af',
  //     800: '#7c83db',
  //     700: '#b3bef6',
  //   },
  // },
}

const theme = extendTheme({ themeStyles })

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
