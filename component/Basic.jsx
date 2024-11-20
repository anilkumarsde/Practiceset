import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Basic = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainheader}>
                <Text style={styles.topHeaderText}>Trip Summary</Text>
            </View>
            <View style={styles.header}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1f67cc', }}>Pick Up & Destination</Text>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Started: 08 Aug 2024,11:47</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>102,Shagun Vijay Nagar Lock Colony ,Indore,Mp</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ended: 08 Aug 2024,01:14 PM</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}> M.G Raiay Colony,Majestic,Bhopal,MP</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1f67cc' }}>Basic Details</Text>
                <View style={styles.mainBox}>
                    <View style={styles.distance}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Trip Distance:</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>244 Km</Text>
                    </View>
                    <View style={styles.distance}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Trip Duration:</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>3hr 55min</Text>
                    </View>
                    <View style={styles.distance}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Trip Price:</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>410/seat</Text>
                    </View>
                    <View style={styles.distance}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Total Seats Offering:</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>03</Text>
                    </View>

                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1f67cc' }}>Vehicle</Text>
                <View style={styles.vehiclesFooter}>
                    <Text>Tata Nexon - AXK 370 </Text>
                    <Text>Only Female</Text>
                </View>
                <View style={styles.mode}>
                    <TouchableOpacity><Text style={{ color: '#1f67cc' }}>Recurring Ride- Mo,Tu,Th</Text></TouchableOpacity>
                    <View style={{
                        flexDirection: 'row', marginTop: '10%',

                    }}>
                        <Text style={{ marginHorizontal: 35 }}>Smoking</Text>
                        <Text>Music</Text>
                    </View>
                </View>


            </View>
            <View style={styles.footerButton}>
                <TouchableOpacity style={{
                    height: '40%',
                    width: '97%', backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 30
                }}><Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Publish Ride</Text></TouchableOpacity>

            </View>
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 1,
        paddingHorizontal: '1%'

        // paddingHorizontal: '1%'
    },
    mainheader: {
        flex: 1, backgroundColor: 'black', borderBottomLeftRadius: 45, borderBottomRightRadius: 45,
        justifyContent: 'center',
        paddingHorizontal: '4%'
    },
    topHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',


    },
    header: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'space-evenly',
        paddingHorizontal: '5%'
    },
    main: {
        flex: 2,
        // backgroundColor: 'purple'
        paddingHorizontal: '5%'
    },
    mainBox: {
        flex: 1,

    },
    distance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '5%'
    },
    footer: {
        flex: 1,
        // backgroundColor: 'green',
        paddingHorizontal: '5%'
    },
    vehiclesFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '5%'
    },
    mode: {
        flexDirection: 'row',
    },
    footerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})