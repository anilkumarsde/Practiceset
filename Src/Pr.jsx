import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const Pr = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'skyblue'}}><Text>box1</Text></View>
            <View style={{ backgroundColor: 'blue',alignSelf:'flex-end' }}><Text>Box2</Text></View>
            <Text style={{ backgroundColor: 'red' }}>box3</Text>
            <Text style={{ backgroundColor: 'tomato' }}>Box4</Text>

        </View>
    )
}

export default Pr

const styles = StyleSheet.create({
    container: {
        flex: 1,

        borderWidth: 6,
        borderColor: 'red',
        flexDirection: 'column '
    }


})