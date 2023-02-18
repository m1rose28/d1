import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
 
  function RideScreen() {
    return (
          <View>
            <Text style={styles.text}>{y}</Text>
          </View>
    );
  }

  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button title="Start Ride" 
          onPress={() => Alert.alert("Simple Button pressed")} />
          </View>
    );
  }

  const Stack = createNativeStackNavigator();

  const [{beta}, sD] = useState({
    beta: 0
  });

 
  let y = (beta*90/157*100).toFixed(0);

  const [subscription, setSubscription] = useState(null);

  const _slow = () => DeviceMotion.setUpdateInterval(3000);
  const _fast = () => DeviceMotion.setUpdateInterval(200);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener((devicemotionData) => {
        sD(devicemotionData.rotation)
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (  
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="RideScreen">
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
