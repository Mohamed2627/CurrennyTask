import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootRuducer from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  serialize: JSON.stringify, // Serialize non-serializable value
  deserialize: JSON.parse, // Deserialize non-serializable value
};

const persistedReducer = persistReducer(persistConfig, rootRuducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
