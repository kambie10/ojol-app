import React from 'react';
import {Text, View} from 'react-native';

export default function Login() {
  return (
    <View style={{padding: 20}}>
      <View style={{width: 25, height: 25, backgroundColor: 'red'}} />
      <View
        style={{width: 106, height: 115, backgroundColor: 'blue', marginTop: 8}}
      />
      <Text>Login Page</Text>
    </View>
  );
}
