import { configureStore,getDefaultMiddleware  } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import {persistStore } from 'redux-persist';


export const store = configureStore({
  
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export const persistor = persistStore(store)


