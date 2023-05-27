import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../modules/home/home.screen';

import {HOME} from './navigation.type';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
