import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, WelcomeAuth, Register, Login} from '../pages';

const Stact = createStackNavigator();

const Router = () => {
  return (
    <Stact.Navigator initialRouteName="Splash">
      <Stact.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stact.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stact.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stact.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stact.Navigator>
  );
};

export default Router;
