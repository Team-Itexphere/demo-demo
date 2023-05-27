import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {HomeStackScreen} from './homeStack.navigator';
import {AuthStackScreen} from './authStack.navigator';

const AppNavigator = () => {
  const accessToken = useSelector(
    (state: any) => state.userReducer.access_token,
  );
  return (
    <NavigationContainer>
      {accessToken == '' ? <AuthStackScreen /> : <HomeStackScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
