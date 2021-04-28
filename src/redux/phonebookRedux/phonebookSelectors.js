import { createSelector } from 'reselect';

export const getIsLoadingSelector = state => state.phonebook.isLoading;
export const getTodosSelector = state => state.phonebook.todos;
export const getFilterSelector = state => state.phonebook.filter;

export const filtrContactList = createSelector(
  [getTodosSelector, getFilterSelector],
  (todos, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);
