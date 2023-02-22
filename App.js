import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ride } from "./screens/welcome"
import { rdx } from "./screens/ride"

function App() {
 
  function RideScreen({ navigation }) {
    let y=rdx;
    console.log(y);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen </Text>
          <Button title="Go home" 
          onPress={() => navigation.navigate(HomeScreen)} /> 
      <Ride/>
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button title="Start Ride" 
          onPress={() => navigation.navigate(RideScreen)} />
          </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (  
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="RideScreen" component={RideScreen} />      
        <Stack.Screen name="HomeScreen" component={HomeScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  text: {
    marginTop: 40,
    paddingVertical: 40,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default App;
