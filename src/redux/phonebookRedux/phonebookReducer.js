import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './phonebookActions'

const initialState = {
  todos: [],
  filter: '',
  isLoading: false,
};
const isLoading = createReducer(initialState.isLoading, {
  [actions.contactAddRequest.type]: () => true,
  [actions.contactAddSuccess.type]: () => false,
  [actions.contactAddFailor.type]: () => false,
  [actions.contactDeleteFailor.type]: () => false,
  [actions.contactDeleteSuccess.type]: () => false,
  [actions.contactDeleteRequest.type]: () => true,
  [actions.contactPostFailor.type]: () => false,
  [actions.contactPostSuccess.type]: () => false,
  [actions.contactPostRequest.type]: () => true,
});

const todos = createReducer(initialState.todos, {
  [actions.contactPostSuccess.type]: (state, action) => [...state, action.payload],
  [actions.contactAddSuccess.type]: (_, action) => action.payload,
  [actions.contactDeleteSuccess.type]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
});

const filter = createReducer(initialState.filter, {
  [actions.contactFilter]: (_, action) => action.payload,
});
export default combineReducers({
  todos,
  filter,
  isLoading,
});
