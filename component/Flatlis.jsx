import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatlis = () => {
    const data=[
        {id:1,name:'anil'},
        {id:2,name:'Sunil'},
        {id:3,name:'anil'},
        {id:4,name:'Pawan'},
        {id:5,name:'Kumar'},
        {id:6,name:'mandal'},
        {id:7,name:'rajan'},
        {id:8,name:'navneet'},
        {id:9,name:'vievek'},
        {id:10,name:'bablu'},
        {id:11,name:'madan'},
        {id:12,name:'kuwar'},
        {id:13,name:'anila'},
        {id:14,name:'anila'},
        {id:15,name:'ashok'},
        {id:16,name:'ashok'},
        {id:17,name:'ashok'},
        {id:18,name:'ashok'},
        {id:19,name:'ashok'},
        {id:20,name:'ashok'},
        {id:21,name:'ashok'},
        {id:22,name:'ashok'},
        {id:23,name:'ashok'},
        {id:25,name:'ashok'},
        {id:26,name:'ashok'},
        {id:27,name:'ashok'},
        {id:28,name:'ashok'},
        {id:29,name:'ashok'},
        {id:30,name:'ashok'},
        {id:31,name:'ashok'},
        {id:32,name:'ashok'},

    ]
  return (
    <View style={styles.container}>
      <Text>Flatlis</Text>
      <FlatList
      data={data}
      initialNumToRender={5}
      keyExtractor={item=>item.id}
      renderItem={({item})=><View style={styles.item} >
        <Text style={styles.fonts}>{`Name:${item.name}`}</Text>
        <Text style={styles.fonts}>{`id:${item.id}`}</Text>
      </View>}/>
    </View>
  )
}

export default Flatlis

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',
        paddingHorizontal:'10%'

    },
    item:{
        height: 50,
        width: '70%',
        backgroundColor: 'white',
        marginVertical: '1%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fonts:{
        fontSize:16,
        color:'black',
        fontWeight:'400'
    }
})