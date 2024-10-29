import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
  const [isOn, setisOn] = useState(false)

  return (

    <View style={styles.container}>
      <Text style={styles.text}>
        {isOn ? "Screen is On" : "Screen is Off"}</Text>
      <TouchableOpacity onPress={() => setisOn(!isOn)}
        style={styles.button}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Toggle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: '5%',
    width: '50%',
    backgroundColor: 'tomato',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: '5%'
  },
  white: {
    backgroundColor: 'white'
  }
})