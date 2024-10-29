import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Addnumber = () => {
    const [number, setNumber] = useState([]);
    const additem = () => {
        let newNumber = number.length + 1;
        setNumber([...number, newNumber])
    }
    return (
        <View style={styles.container}>
            <Text></Text>
            <TouchableOpacity style={styles.button}
                onPress={additem}>
                <Text>Add item</Text>
            </TouchableOpacity>
            <FlatList
                data={number}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <View style={styles.itemList}>
                    <Text>{item}</Text>
                </View>}
            />
        </View>
    )
}

export default Addnumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        paddingHorizontal: '5%'
    },
    button: {
        height: '10%',
        width: '50%',
        backgroundColor: 'tomato',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemList:{
       height:55,
       width:'90%',
       backgroundColor:'blue',
       margin:5,
       paddingHorizontal:10,
       borderRadius:5,
       justifyContent:'center',
       alignItems:'center'
    }

})