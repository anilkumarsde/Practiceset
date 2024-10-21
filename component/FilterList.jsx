import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterList = () => {
  const people = [{ name: 'anil', age: 24 },
  { name: 'Pawan', age: 25 },
  { name: 'kamal', age: 14 },
  { name: 'Pk', age: 12 },
  { name: 'anu', age: 54 },
  { name: 'pk', age: 56 },
  { name: 'Kunal', age: 546 },
  { name: 'Amit', age: 12 },
  { name: 'Amit', age: 142 },
  { name: 'Amit', age: 12 },
  { name: 'Amit', age: 124 },
  { name: 'Amit', age: 12 },
  { name: 'Amit', age: 12 },
  ]
  let adult = people.filter((person, idx) => {
    return person.age >= 18
  })
  return (
    <View style={styles.container}>
      <Text>FilterList</Text>
      {
        adult.map((person, idx) => <View key={idx}
          style={styles.item}>
          <Text style={styles.fonts}>{`Name:${person.name}`}</Text>
          <Text style={styles.fonts}>{`Age:${person.age}`}</Text>
        </View>)
      }
    </View>
  )
}

export default FilterList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    paddingHorizontal: "10%"
  },
  item: {
    height: "10%",
    width: '80%',
    backgroundColor: 'white',
    marginVertical: '5%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonts: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',

  }
})