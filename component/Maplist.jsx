import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Maplist = () => {
    const list=['apple','banana','kiwi','orange','mango','lichi','mango','pakore','jamun']
  return (
    <View style={styles.container}>
      <Text>Maplist</Text>
      {
        list.map((val,idx)=><View key={idx}
        style={styles.item}>
            <Text style={styles.fonts}>{val}</Text>
        </View>)
      }
    </View>
  )
}

export default Maplist

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
      paddingHorizontal:"10%"
    },
    item:{
        height:"5%",
        width:'80%',
        backgroundColor:'white',
        marginVertical:'5%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    fonts:{
        fontSize:16,
        color:'black',
        fontWeight:'500',

    }
})