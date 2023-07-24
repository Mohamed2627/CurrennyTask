/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux';
import { AxiosInterceptors } from './src/config';




function App() {
  return (
    <Provider store={store}>
      <AxiosInterceptors>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </AxiosInterceptors>
    </Provider>
  )
}

export default App;
