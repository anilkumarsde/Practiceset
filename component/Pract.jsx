import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const Pract = () => {
    const [text,setText]=useState('')
    const arr = ['apple', 'orange', 'litchi', 'mango','angur','Apple']
    let arr1 = arr.filter((fruit) => fruit.startsWith(text))
    return (
        <View style={{flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <TextInput placeholder='Enter character....'
            value={text}
            onChangeText={(tex)=>setText(tex)}
            style={{height:50,
                width:100,
                borderWidth:1,
                justifyContent:'center',
                alignItems:'center'
            }} />
            {
                arr1.map((f, id) => <View key={id}><Text style={{fontSize:20}}>{f}</Text></View>)
            }
        </View>
    )
}
export default Pract
const styles = StyleSheet.create({})