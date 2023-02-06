import React, { useCallback, useState } from 'react'

import db from './firebase/config'

import { NavigationContainer } from '@react-navigation/native'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { useRoute } from './router'

// SplashScreen.preventAutoHideAsync()

export default function App() {
  const [user, setUser] = useState(null)

  db.auth().onAuthStateChanged((user) => setUser(user))

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const routing = useRoute(user)

  return (
    <Provider store={store}>
      <NavigationContainer onLayout={onLayoutRootView}>
        {routing}
      </NavigationContainer>
    </Provider>
  )
}
