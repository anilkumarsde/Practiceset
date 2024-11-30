import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Additem from './Additem';

const Ppppp = () => {
    const [users, setUsers] = useState([]);

    // function for adding new users


    const Additem = () => {
        let newArr = { id: Date.now().toString(), name: `user ${Date.now()}` }
        setUsers([...users, newArr])

    }

    // remove item form the array

    const removeItem = (id) => {
        let newArrrr = users.filter((val) => val.id != id)
        setUsers(newArrrr);
    }
    return (
        <View style={styles.container}>

            {/* add newItem */}
            <Button title='add item' onPress={Additem}></Button>

            {/* rendering item on screen */}


            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TouchableOpacity onPress={() => removeItem(item.id)}><Text>{item.name}</Text></TouchableOpacity>}
            />

        </View>
    )
}

export default Ppppp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '5%'
    }
})