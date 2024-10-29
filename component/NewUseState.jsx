import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const NewUseState = () => {
  const [data,setData]=useState(0);
  return (
    <View style={styles.container}>
     <Text style={styles.text}>{data}</Text>
     <TouchableOpacity style={styles.button}
     onPress={()=>setData(data+1)}>
      <Text>Press</Text>
     </TouchableOpacity>
    </View>
  )
}

export default NewUseState

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'tomato',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    height:'5%',
    width:'50%',
    backgroundColor:'skyblue',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
})