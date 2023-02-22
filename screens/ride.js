import React, { useState, useEffect } from 'react';
import { DeviceMotion } from 'expo-sensors';

function rdx(){
   
    console.log("3");
    const [{beta}, sD] = useState({
        beta: 0
    });

    let y = (beta*90/157*100).toFixed(0);

    const [subscription, setSubscription] = useState(null);

    setSubscription(
        DeviceMotion.addListener((devicemotionData) => {
        sD(devicemotionData.rotation)
        })
    );

    DeviceMotion.setUpdateInterval(3000);

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };
    
      useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
      }, []);
    
return ("3");
}

rdx;