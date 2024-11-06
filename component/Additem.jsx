import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Additem = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState([{ id: 1, name: 'anil' }])
    const addItem = () => {
        if (text) {
            let newItem = { id: items.length + 1, name: text }
            setItems([...items, newItem]);
            setText('')

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerFont}>ToDo listapp</Text>
            </View>
            <View style={styles.main}>
                <TextInput placeholder='Enter Item name'
                    placeholderTextColor={'black'}
                    style={styles.textInputBox}
                    value={text}
                    onChangeText={(val) => setText(val)} />
                <TouchableOpacity style={styles.addItemButton}
                    onPress={addItem}>
                    <Text style={styles.buttonFont}>Add item</Text>
                </TouchableOpacity>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <View style={styles.listItem}>
                        <Text style={styles.itemFont}>{item.name}</Text>
                    </View>} />
            </View>
            <View style={styles.footer}></View>
        </SafeAreaView>
    )
}

export default Additem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        paddingHorizontal: '1%'
    },
    header: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 4,
        // backgroundColor: 'blue',
        paddingHorizontal: '5%'
    },
    headerFont: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    textInputBox: {
        height: 60,
        borderWidth: 1,
        width: '95%',
        paddingHorizontal: '5%',
        borderRadius: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    addItemButton: {
        height: 50,
        width: '30%',
        marginVertical: '3%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',

    },
    buttonFont: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black'

    },
    listItem: {
        height: 50,
        width: '95%',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginTop: '5%',
        borderRadius: 5,
        backgroundColor: 'white',

    },
    itemFont: {
        fontSize: 17,
        color: 'black',
        fontWeight: '500'
    }
})