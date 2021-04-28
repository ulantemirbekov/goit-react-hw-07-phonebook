import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './authActions';
const initialState = {
  user: { name: null, email: null },
  token: '',
  isLoading: false,
  error: '',
  isAuthIn: false

};
const isLoading = createReducer(initialState.isLoading, {
  [actions.getCarrentUserRequest.type]: () => true,
  [actions.getCarrentUserSuccess.type]: () => false,
  [actions.getCarrentUserFailure.type]: () => false,
  [actions.loginRequest.type]: () => true,
  [actions.loginSuccess.type]: () => false,
  [actions.loginFailure.type]: () => false,
  [actions.logoutRequest.type]: () => true,
  [actions.logoutSuccess.type]: () => false,
  [actions.logoutFailure.type]: () => false,
});

const user = createReducer(initialState.user, {
  [actions.createUserSuccess.type]: (_, { payload }) => payload.user,
  [actions.loginSuccess.type]: (_, { payload }) => payload.user,
  [actions.getCarrentUserSuccess.type]: (_, { payload }) => payload,
  [actions.logoutSuccess.type]: () => initialState.user,
  [actions.logoutFailure.type]: () => initialState.user,
});
const token = createReducer(initialState.token, {
  [actions.createUserSuccess.type]: (_, { payload }) => payload.token,
  [actions.loginSuccess.type]: (_, { payload }) => payload.token,
  [actions.logoutSuccess.type]: () => null,
  [actions.logoutFailure.type]: () => initialState.token,
});
const error = createReducer(initialState.error, {
  [actions.createUserFailure.type]: (_, { payload }) => payload,
  [actions.getCarrentUserFailure.type]: (_, { payload }) => payload,
  [actions.logoutFailure.type]: (_, { payload }) => payload,
  [actions.loginFailure.type]: (_, { payload }) => payload,
});


export const isAuthIn = createReducer(initialState.isAuthIn, {
  [actions.createUserSuccess.type]: () => true,
  [actions.loginSuccess.type]: () => true,
  [actions.getCarrentUserSuccess.type]: () => true,
  [actions.createUserFailure.type]: () => false,
  [actions.getCarrentUserFailure.type]: () => false,
  [actions.loginFailure.type]: () => false,
  [actions.logoutSuccess.type]: () => false,
})
export default combineReducers({
  isLoading,
  isAuthIn,
  user,
  token,
  error,
});
