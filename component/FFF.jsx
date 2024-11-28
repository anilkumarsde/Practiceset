import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const FFF = () => {
    const [student, setStudent] = useState([
        { id: 1, name: 'anil' },
        { id: 2, name: 'sunil' },
        { id: 3, name: 'Pawan' },
        { id: 4, name: 'mayank' }])
    const addItem = () => {

        setStudent([...student, { id: student.length + 1, name: `use ${student.length}` }]);
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: '5%' }}>
            <Text>Lorem ipsum dolor sit amet.
            </Text>
            <TouchableOpacity style={{ marginVertical: 5, backgroundColor: 'red', padding: '5%' }}
                onPress={addItem}>
                <Text>Add item</Text>
            </TouchableOpacity>
            <FlatList
                data={student}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <View>
                    <Text>{item.name}</Text>
                </View>}



            />
        </View>
    )
}

export default FFF

const styles = StyleSheet.create({})