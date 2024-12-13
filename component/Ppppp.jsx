import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Additem from './Additem';
// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
const Ppppp = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');
    const [age, setAge] = useState();

    // function for adding new users


    const Additem = () => {
        if (newUser.length > 0 && age > 0) {
            let newArr = { id: Date.now().toString(), name: newUser, Age: age }
            setUsers([...users, newArr])
            setNewUser('')
            setAge(null)


        }
    }

    // remove item form the array

    const removeItem = (id) => {
        setUsers(users.filter((val) => val.id != id));

    }
    // eidt item in the array
    const editItem = (id) => {
        setUsers(users.map((val) => val.id === id ? { ...val, name: newUser, Age: age } : { ...val }))
        setAge();
        setNewUser('')

    }
    return (
        <View style={styles.container}>


            {/* taking input from users */}

            <TextInput placeholder='Enter Users Name.....'
                style={styles.TextInputBox}
                value={newUser}
                onChangeText={(text) => setNewUser(text)}
            />
            <TextInput placeholder='Enter Users Age.....'
                style={styles.TextInputBox}
                keyboardType='number-pad'
                value={age}
                onChangeText={(val) => setAge(val)}
            />



            {/* add newItem */}
            <TouchableOpacity onPress={Additem} style={styles.button}>
                <Text>Add item</Text>
            </TouchableOpacity>

            {/* rendering item on screen */}


            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={styles.itemList}>
                    <View>
                      <TextInput  placeholder={item.name} onChangeText={(text)=>setNewUser(text)}/>
                        <Text>Age:{item.Age}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => editItem(item.id)}>
                            <Feather name={"edit"} color={'purple'} size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => removeItem(item.id)}>
                            <MaterialCommunityIcons name={"delete"} size={30} color={'purple'} />
                        </TouchableOpacity>

                    </View>


                </View>}
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
    },
    button: {
        backgroundColor: 'tomato',
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    },
    TextInputBox: {
        borderWidth: 1,
        paddingHorizontal: 10,
        margin: 5,
        borderRadius: 10
    },
    itemList: {
        backgroundColor: "skyblue",
        // borderWidth: 1,
        marginVertical: 5,
        padding: 20,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    }
})