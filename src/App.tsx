import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAccessToken} from './shared/config/accessToken';

import AppNavigator from './navigation/navigator';

const App = () => {
  useEffect(() => {
    const accessToken = AsyncStorage.getItem('token');
    setAccessToken(accessToken);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
