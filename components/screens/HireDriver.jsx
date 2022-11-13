import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { drivers } from '../apis/DATA';
import DriverContainer from './DriverContainer';

const HIreDriver = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.row} >
        <Text style={styles.title}>Nearby Drivers</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Nearby Drivers')}
        >
        <Text style={styles.seeAllBtn} >See all</Text>
        </TouchableOpacity>
     </View>
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

export default HIreDriver

const styles = StyleSheet.create({
  container:{
      marginTop:40,
      padding:16,
      paddingBottom:40

  },
  row:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginBottom:15,
  },
  title:{
    fontSize:17,
    fontWeight:'600',
    lineHeight:26,
    
  },
  seeAllBtn:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:21,
    color:'#5D5FEF'
  }
})