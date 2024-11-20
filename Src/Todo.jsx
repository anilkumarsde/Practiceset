import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
    const [array, setArray] = useState([])

    const Additem = () => {
        setArray([...array, array.length + 1]);
    }
    const removeItem = (idx) => {
        let newArry = array.filter((val, id) => {
            return idx != id;
        })
        setArray(newArry);


    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={Additem}>
                <Text>Add item</Text>
            </TouchableOpacity>
            {
                array.map((val, idx) => <TouchableOpacity key={idx} style={styles.list} onPress={() => removeItem(idx)}>
                    <Text>{val}</Text>

                </TouchableOpacity>)
            }
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: '5%',
        width: '50%',
        backgroundColor: 'skyblue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10

    },
    list: {
        backgroundColor: 'tomato',
        marginVertical: 10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})