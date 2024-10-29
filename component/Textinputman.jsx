import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Textinputman = () => {
  const [text,setText]=useState('')
  return (
    <View style={styles.contaner}>
      <TextInput placeholder='type someting'
      value={text}
      onChangeText={(te)=>setText(te)}
      style={styles.textbox}/>
      <Text>{text}</Text>
      

    </View>
  )
}

export default Textinputman

const styles = StyleSheet.create({
  contaner:{
    flex:1,
    backgroundColor:'purple',
    paddingHorizontal:'10%',
    paddingVertical:'10%'
  },
  textbox:{
    height:'10%',
    width:'90%',
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    paddingHorizontal:10
  }
})