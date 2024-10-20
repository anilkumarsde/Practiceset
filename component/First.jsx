import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const First = () => {
  let inl = () => {//step 3
    if (count < 10) {
      setCount(count + 1)
    }
  }
  const inlr = () => {//step 5
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const [count, setCount] = useState(0);//step 1
  return (
    <View style={styles.container}>
      <Text style={styles.fontsi}>{count}</Text>
      <TouchableOpacity
        onPress={inl}//step 2
        style={styles.button}>
        <Text style={styles.fonts}>Increse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={inlr}//step 4
        style={styles.button}>
        <Text style={styles.fonts}>Decrease</Text>
      </TouchableOpacity>

    </View>
  )
}

export default First

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: '5%',
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%'
  },
  fonts: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black'
  },
  fontsi:{
    fontSize:29,
    color:'white',
    fontWeight:'bold'
  }
})