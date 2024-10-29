import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [item, setItem] = useState([1,2])
    const addItem = () => {
        let newItem = item.length + 1;
        setItem([...item, newItem]);
        console.warn(item)
    }
    return (
        <View>
            <Text>UseState</Text>

            <TouchableOpacity onPress={addItem}>
                <Text>Press me</Text>
            </TouchableOpacity>
            {
                item.map((val, idx) => {
                   <View key={idx}>
                    <Text>{val}</Text>
                    </View>
                })
            }
        </View>
    )
}

export default UseState

const styles = StyleSheet.create({})