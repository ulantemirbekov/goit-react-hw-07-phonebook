import { combineReducers } from 'redux';
import phonebook from './phonebookRedux/phonebookReducer';
import login from './authRedux/authReducer';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export default combineReducers({
  phonebook,
  login: persistReducer(persistConfig, login)
});
