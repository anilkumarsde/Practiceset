import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Visible = () => {
    const [Visible, setvisible] = useState(false)
    return (
        <View style={Visible?styles.red:null}>
            <Button title='Press' onPress={() => setvisible(!Visible)} />

        </View>
    )
}

export default Visible

const styles = StyleSheet.create({
    red:{
        flex:1,
        backgroundColor:'tomato',
        justifyContent:'center',

        alignItems:'center'
    },
    blue:{
        flex:1,
        backgroundColor:"skyblue ",
        justifyContent:'center',
        alignItems:'center'
    }
})