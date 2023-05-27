import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME, LOGIN} from './navigation.type';

import Login from '../modules/authentication/login.screen';
import Home from '../modules/home/home.screen';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
