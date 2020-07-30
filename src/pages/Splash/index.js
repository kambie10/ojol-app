import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}