import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiWithMap = () => {
    const [data, setData] = useState([]);
    const ApiData = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            let result = await fetch(url);
            result = await result.json();
            setData(result);
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        ApiData();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Text>ApiWithMap</Text>
            <FlatList
                style={{ flex: 1 }}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <View style={{
                    flex: 1,
                    width: '100%', justifyContent: 'center',
                    backgroundColor: 'tomato', marginVertical: '5%',
                    marginHorizontal: '5%',
                    paddingHorizontal: '5%'
                }}>
                    <Text>{`userId:${item.userId}`}</Text>
                    <Text>{`Id:${item.id}`}</Text>
                    <Text>{`Title:${item.title}`}</Text>
                    <Text>{`Body:${item.body}`}</Text>
                </View>} />
        </View>
    )
}
export default ApiWithMap

const styles = StyleSheet.create({})