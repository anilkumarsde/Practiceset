import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';


const RideDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fri 07 August</Text>
        <View style={styles.ratingContainer}>
          <View >
            <Text style={styles.matchText}>98% Match</Text>
          </View>
          <View style={styles.starConatiner}>
            <Icon name="star" size={28} color="#FFD700" />
            <Text style={styles.ratingText}>5.0/5 - 5 ratings</Text>
          </View>
        </View>
      </View>

      {/* Ride Info */}
      <View style={styles.rideInfo}>
        <Text style={styles.timeText}>15:00</Text>
        <View>

        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>1205, Apollo DB Hotel Indore, Indore</Text>
          <Text style={styles.distanceText}>9 km from your departure</Text>
        </View>
      </View>
      <View style={styles.rideInfo}>
        <Text style={styles.timeText}>22:00</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>35, ISBT, Habib Ganj Bhopal, Bhopal</Text>
          <Text style={styles.distanceText}>4 km from your arrival</Text>
        </View>
      </View>
      {/* Price Info */}
      <View style={styles.priceInfo}>
        <Text style={styles.priceLabel}>Total price for 2 passenger</Text>
        <Text style={styles.priceText}>Rs. 1029</Text>
      </View>


      {/* Rider Detail */}
      <View style={styles.riderDetail}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: height * 0.01 }}>
          <Image source={{ uri: 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg' }} height={height * .07} width={width * 0.15} borderRadius={width * 0.75} />
          <Text style={styles.riderName}>Ajay Sharma</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: height * 0.01 }}>
          <Icon name="verified" size={20} color='grey' />
          <Text style={styles.verifiedText}>Verified Profile</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: height * 0.01 }}>
          <Icon name="bolt" size={20} color='grey' />
          <Text style={styles.verifiedText}>Your booking will confirmed instanly</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: height * 0.01 }}>
          <Icon name="bolt" size={20} color='grey' />
          <Text style={styles.verifiedText}>Rarely cancels rides</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: height * 0.01 }}>
          <Icon name="bolt" size={20} color='grey' />
          <Text style={styles.verifiedText}>Max.2 in the back</Text>
        </View>
      </View>
      {/* PassangerDetails */}
      <View style={styles.passangerContainer}>
        <Text style={styles.passangerText}>Passengers</Text>
        <View style={styles.profilecontainer}>
          <View style={styles.leftBox}><Text> sit amet.</Text></View>
          <View style={styles.rightBox}><Text>Lorem.</Text></View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#fff',
    marginVertical: height * 0.05
  },
  header: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',

    marginBottom: height * 0.04,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: '#000000',

  },
  ratingContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5
  },
  matchText: {
    backgroundColor: '#5AD620',
    color: 'white',
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  ratingText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
    color: '#6C7278'
  },
  starConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  rideInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    justifyContent: ''
  },
  timeText: {
    fontSize: width * 0.04,
    width: width * 0.15,
    fontWeight: '500',
    color: 'black'
  },
  locationContainer: {
    marginLeft: width * 0.05,
    display: 'flex',
    flexWrap: "wrap",
    marginTop: height * 0.02
  },
  locationText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'black'
  },
  distanceText: {
    color: '#EB996E',
    fontSize: width * 0.035,
    fontWeight: '500'
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.03,
    borderWidth: width * 0.001,
    borderRadius: width * 0.03,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#ccc',

  },
  priceLabel: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: '#000000'
  },
  priceText: {
    fontSize: width * 0.045,
    fontWeight: '500',
    color: '#000000'
  },
  riderDetail: {

    margin: width * 0.001,
    // alignItems: 'center',
    alignItems: 'flex-start'

  },
  riderName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
    color: 'black'
  },
  verifiedText: {
    fontSize: width * 0.04,
    color: '#888',
    marginHorizontal: width * 0.01,
    fontWeight: '400',
    color: 'grey'

  },
  bookingText: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#4CAF50',
  },
  passangerContainer: {
    paddingBottom: height * 0.03

  },
  passangerText: {
    fontSize: height * 0.02
  },
  profilecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default RideDetailsScreen;