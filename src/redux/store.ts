import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'ordersReducer', 'globalReducer'],
};

const persist = persistReducer(persistConfig, reducers);

export const store = createStore(persist, {}, applyMiddleware(ReduxThunk));

export const persister = persistStore(store);
