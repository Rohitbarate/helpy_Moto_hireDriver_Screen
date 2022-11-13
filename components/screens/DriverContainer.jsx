import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons';

const DriverContainer = ({ driver, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Driver",{
            driver,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profilePic} source={driver.img} />
          <View style={styles.profileData}>
            <Text style={styles.DriverName}>{driver.name}</Text>
              <Text style={styles.ratingNum}>
                {driver.rating}{" "}
              <Icon size={16} color="#F2C94C" name="star" />
              </Text>
              <Text style={styles.distanceText}><LocationIcon name="location-pin" size={14} color="#7D7FF2"/>{" "}{driver.distance} Km</Text>
          </View>
        </View>
        <View style={styles.charge}>
          <Text style={styles.chargeText}>₹ {driver.charge}/Hr</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DriverContainer;

const styles = StyleSheet.create({
  container: {
    height: 92,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 5,
    paddingRight: 8,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingVertical: 8.5,
  },
  profilePic: {
    height: 57,
    width:57,
    aspectRatio: 1,
    marginRight: 16,
    borderRadius:50,
    resizeMode:'contain'
  },
  profileData: {
    height:'100%',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  DriverName: {
    fontSize: 15,
    lineHeight: 22,
    color: "#17161A",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ratingNum: {
    fontSize:16,
    lineHeight: 19,
    color: "#FFCE31",
    textAlign: "center",
  },
  distanceText: {
    fontSize: 16,
    lineHeight: 21,
    color: "#808080",
    textAlign:'center',
    textAlignVertical:'center'
  },
  charge: {},
  chargeText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    textAlignVertical: "bottom",
    color: "#4BB543",
  },
});
