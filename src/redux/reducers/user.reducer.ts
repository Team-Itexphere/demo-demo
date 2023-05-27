import {
  LOGIN_FAILED,
  RESPONSE_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../actions/actions.type';
import {PURGE, REHYDRATE, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  access_token: '',
  userInfo: '',
  loginFailed: false,
};

const persistConfig = {
  key: 'authStore',
  storage: AsyncStorage,
  blacklist: [],
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };
    case RESPONSE_PENDING:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginFailed: true,
      };
    case PURGE:
    case LOGOUT_USER:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default persistReducer(persistConfig, authReducer);
