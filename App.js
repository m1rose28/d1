import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Alert, Image} from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ride } from "./screens/welcome"
import { rdx } from "./screens/ride"
import { gStyles } from './styles/globalStyles';

function App() {
 
  function RideScreen({ navigation }) {
    return (
      <View style={globalStyles.container}>
       <ImageBackground source={require("./assets/gradient.png")} resizeMode="cover" style={gStyles.image}>

        <Text>Home Screen </Text>
          <Button title="Go home" 
          onPress={() => navigation.navigate(HomeScreen)} /> 
        <Ride/>
        </ImageBackground>
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={gStyles.container}>
        <ImageBackground source={require("./assets/gradient.png")} resizeMode="cover" style={gStyles.image}>
        <Text>Home Screen</Text>
          <Button title="Start Ride" 
          onPress={() => navigation.navigate(RideScreen)} />
        </ImageBackground>
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

const globalStyles = StyleSheet.create({
  container: {
     flex: 1,
  },
  text: {
    marginTop: 40,
    paddingVertical: 40,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
