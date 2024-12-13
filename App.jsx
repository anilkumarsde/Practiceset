import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ppppp from './component/Ppppp'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Ppppp />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
