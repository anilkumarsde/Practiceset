import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Visible = () => {
    const Display = () => {
        setVisible(true);
    }
    const [text, setText] = useState('');
    const [Visible, setVisible] = useState(false)
    return (
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <Text>Visible</Text>
            <TextInput placeholder='enter username' style={styles.TextInputBox}
                value={text}
                onChangeText={(tex) => setText(tex)}
            />
            <Button title='Display' onPress={Display} />
            {
             Visible?<Text>iii</Text>:<Text>Hi</Text>
            }
        </View>
    )
}

export default Visible

const styles = StyleSheet.create({
    TextInputBox: {
        height: 50,
        width: 200,
        borderWidth: 1
    }
})