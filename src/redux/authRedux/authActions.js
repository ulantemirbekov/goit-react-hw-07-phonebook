import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('user/login/Request');
export const loginSuccess = createAction('user/login/Success');
export const loginFailure = createAction('user/login/Failure');

export const logoutRequest = createAction('user/logout/Request');
export const logoutSuccess = createAction('user/logout/Success');
export const logoutFailure = createAction('user/logout/Failure');

export const getCarrentUserRequest = createAction('user/current/Request');
export const getCarrentUserSuccess = createAction('user/current/Success');
export const getCarrentUserFailure = createAction('user/current/Failure');

export const createUserRequest = createAction('user/create/Request');
export const createUserSuccess = createAction('user/create/Success');
export const createUserFailure = createAction('user/create/Failure');
