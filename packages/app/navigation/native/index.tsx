import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { DashboardScreen } from '../../features/dashboard/screen'
import { CoinScreen } from '../../features/coin/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  dashboard: undefined
  coin: {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          title: 'Greener',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#202225',
          },
        }}
      />
      <Stack.Screen
        name="coin"
        component={CoinScreen}
        options={{
          title: '',
          headerBackTitle: '',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#202225',
          },
        }}
      />
    </Stack.Navigator>
  )
}
