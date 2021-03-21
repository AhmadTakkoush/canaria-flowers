import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../pages/HomeScreen'
import { CallScreen } from '../pages/CallScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createStackNavigator()

const MainNavigation = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Call' component={CallScreen} />
  </Stack.Navigator>
)

const Routes = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
)

export default Routes
