import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const Additem = () => {
    const [name, setName] = useState('');
    const [item, setItem] = useState([]);
    const addItem = () => {
        setItem([...item, {id:item.length+1,value:name}])
        setName('')

    }
    return (
        <View style={styles.container}>
            <Text>Additem</Text>
            <View style={styles.MainBox}>
                <TextInput
                    placeholder='Type something' onChangeText={(i) => setName(i)}
                    value={name}
                    placeholderTextColor={'blue'}
                    style={styles.textBox}
                />
                <TouchableOpacity style={styles.button}
                    onPress={addItem}>
                    <Text style={styles.textC}>Add item</Text>
                </TouchableOpacity>


            </View>
            <View style={styles.listBox}>
            {
                item.map((val,idx)=><View key={idx}
                style={styles.listitem}>
                    <Text>{val}</Text>
                </View>)
            }

            </View>



        </View>
    )
}
export default Additem
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },
    MainBox: {
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'


    },
    textBox: {
        height: '50%',
        backgroundColor: 'white',
        width: '60%',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: 'blue'

    },
    button: {
        height: '50%',
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'


    },
    textC: {
        color: 'blue',
        fontWeight: 'bold'
    },
    listBox:{
        height: '70%',

        paddingHorizontal:10

    },
    listitem:{
        height:'10%',
        backgroundColor:'blue',
        margin:'5%',
        paddingHorizontal:10,
        borderRadius:10,
        justifyContent:'center'
    }

})