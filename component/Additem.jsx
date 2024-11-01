import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Additem = () => {
    const [task, setTask] = useState('');
    const [item, setItem] = useState([
        { id: 1, name: 'apple' },
        { id: 2, name: 'Mango' }
    ])
    const addItem = () => {
        if (task.length > 0) {
            let newItem = { id: item.length + 1, name: task }
            setItem([...item, newItem])
            setTask('');
        }
    }
    const removeItem=(ids)=>{
       let newitemlist=item.filter((i)=>i.id !=ids)
       setItem(newitemlist)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo list</Text>
            </View>
            <View style={styles.main}>
                <TextInput placeholder='Type something....'
                    value={task}
                    onChangeText={(text) => setTask(text)}
                    style={styles.textInputBox}
                />
                <TouchableOpacity onPress={addItem}
                    style={styles.button}>
                    <Text>Add item</Text>
                </TouchableOpacity>
                <FlatList data={item}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<View style={styles.listItem}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity
                        onPress={()=>removeItem(item.id)}
                        style={styles.removeButton}><Text>Remove</Text></TouchableOpacity>
                    </View>)} />

            </View>


        </View>
    )
}

export default Additem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '4%',
        // backgroundColor:'red'
    },
    header: {
        height: '10%',
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'


    },
    main: {
        height: '90%',
        width: '100%',
        // backgroundColor:'red'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInputBox: {
        // backgroundColor:'red',
        height: '10%',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '5%'


    },
    button: {
        height: '7%',
        // backgroundColor:'red',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: ''
    },
    listItem: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: "10%",
        backgroundColor: '#e5e1de',
        marginVertical: '5%',
        alignItems: 'center',
        borderRadius: 10
    },
    removeButton:{
        backgroundColor:'tomato',
        height:'50%',
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5

    }
})