import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const initialState = {
  email: '',
  password: '',
}

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)
  const [state, setState] = useState(initialState)
  const [isReady, setIsReady] = useState(false)
  const [dimensions, setdimensions] = useState(
    Dimensions.get('window').width - 20 * 2
  )

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2

      setdimensions(width)
    }
    Dimensions.addEventListener('change', onChange)
  }, [])

  const keyboardHide = () => {
    setIsShowKeyboard(false)
    Keyboard.dismiss()
    setState(initialState)
  }

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/storm.jpeg')}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 150,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  value={state.email}
                  style={styles.input}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                  }}
                  onChangeText={(value) => {
                    setState((prev) => ({ ...prev, email: value }))
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  value={state.password}
                  style={styles.input}
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true)
                  }}
                  onChangeText={(value) => {
                    setState((prev) => ({ ...prev, password: value }))
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 6,
    color: '#f0f8ff',
    textAlign: 'center',
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: '#f0f8ff',
    marginBottom: 5,
    fontSize: 20,
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: '#f0f8ff',
        borderColor: '#6E6E6E',
      },
      android: {
        backgroundColor: 'transparent',
        borderColor: '#f0f8ff',
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === 'ios' ? '#4169e1' : '#f0f8ff',
    fontSize: 18,
  },
  header: {
    alignItems: 'center',
    marginBottom: 120,
  },
  headerTitle: {
    fontSize: 30,
    color: '#f0f8ff',
    fontFamily: 'Roboto-Regular',
  },
})
