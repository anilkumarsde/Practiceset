import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
    const [array, setArray] = useState([])
    const Additem = () => {
        setArray([...array, array.length + 1]);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={Additem}>
                <Text>Add item</Text>
            </TouchableOpacity>
            {
                array.map((val, idx) => <View key={idx}>
                    <Text>{val}</Text>
                </View>)
            }
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    button: {
        height: '5%',
        width: '50%',
        backgroundColor: 'skyblue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10

    }
})