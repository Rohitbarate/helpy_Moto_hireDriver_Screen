import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { drivers } from '../apis/DATA';
import DriverContainer from './DriverContainer';

const NearbyDrivers = ({navigation}) => {
       
  return (
    <View style={styles.container}>
      <FlatList
        data={drivers}
        keyExtractor={(item)=>item.driverId}
        renderItem={({item})=>{
            return <DriverContainer driver={item} navigation={navigation} />
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default NearbyDrivers

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical:6,
        paddingHorizontal:12,
        backgroundColor:'#d6d8db'
    },
})