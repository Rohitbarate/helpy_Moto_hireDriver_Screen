import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import NearbyDrivers from './components/screens/NearbyDrivers'
import HireDriver from './components/screens/HireDriver'
import DriverInfo from './components/screens/DriverInfo'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
      initialRouteName='Hire Driver'
       screenOptions={{ headerTitleAlign: "center" ,
       headerTitleStyle:{fontSize:16,fontWeight:'600'}}}
      >
        <Stack.Screen name='Hire Driver' component={HireDriver} options={{headerShown:false}} />
        <Stack.Screen name='Nearby Drivers' component={NearbyDrivers} />
        <Stack.Screen name='Driver' component={DriverInfo} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
