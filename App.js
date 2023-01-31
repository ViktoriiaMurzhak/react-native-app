import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RegistrationScreen from './Screens/RegistrationScreen.jsx'
import LoginScreen from './Screens/LoginScreen.jsx'
import { createStackNavigator } from '@react-navigation/stack'

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

const MainStack = createStackNavigator()

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        {/* <MainStack.Screen name="Home" component={Home} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
