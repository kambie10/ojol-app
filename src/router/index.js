import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, WelcomeAuth, Register, Login} from '../pages';

const Stact = createStackNavigator();

const Router = () => {
  return (
    <Stact.Navigator>
      <Stact.Screen name="Splash" component={Splash} />
      <Stact.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stact.Screen name="Register" component={Register} />
      <Stact.Screen name="Login" component={Login} />
    </Stact.Navigator>
  );
};

export default Router;
