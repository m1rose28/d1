import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

export default function App() {
 
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
    <View>
      <Text style={styles.text}>{y}</Text>
    </View>
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
