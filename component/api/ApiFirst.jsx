import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const ApiFirst = () => {
    const [data, setData] = useState(undefined);
    const [loding, setLoding] = useState(true)
    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        try {
            let result = await fetch(url);
            result = await result.json();

            setData(result);

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoding(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    if (loding) {
        return (
            <ActivityIndicator size="large" color="red" />
        )
    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'5%'}}>
            <Text></Text>
            {
                data ? <View>
                    <Text style={{fontSize:30,fontFamily:'cursive',color:'tomato'}}>{`data id:${data.id}`}</Text>
                    <Text style={{fontSize:30,fontFamily:'cursive',color:'tomato'}}>{data.title}</Text>
                    <Text style={{fontSize:30,fontFamily:'cursive',color:'tomato'}}>{data.body}</Text>
                </View> : null
            }
        </View>
    )
}
export default ApiFirst
const styles = StyleSheet.create({})