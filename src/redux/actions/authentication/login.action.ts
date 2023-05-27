import {LOGIN_FAILED, RESPONSE_PENDING, LOGIN_SUCCESS} from '../actions.type';

import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {userLoginService} from '../../../services/authentication/login.service';
import {setAccessToken} from '../../../shared/config/accessToken';

export const loginAction = (username: string, password: string, Alert: any) => {
  return (dispatch: Dispatch) => {
    dispatch({type: RESPONSE_PENDING});

    userLoginService(username, password)
      .then((response: any) => {
        const {access_token} = response.data;

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            access_token,
          },
        });

        AsyncStorage.setItem('token', access_token ? access_token : '');
        setAccessToken(access_token);
      })
      .catch((error: any) => {
        dispatch({type: LOGIN_FAILED});
        Alert.alert(
          'APIs not connected in this template,',
          'error comming from login.action.ts catch',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
        );
        return {errorMessage: error.message};
      });
  };
};
