import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreene</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
