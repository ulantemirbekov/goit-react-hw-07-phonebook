import { useSelector, useDispatch } from 'react-redux';
import PhonebookFormServis from './PhonebookFormServis';
import TodoList from '../../PhonebookComponents/ContactList';
import Filter from '../../PhonebookComponents/FormFilter';
import { contactFilter } from '../../../redux/phonebookRedux/phonebookActions';
import {
  getFilterSelector,
  getTodosSelector,
} from '../../../redux/phonebookRedux/phonebookSelectors';

import {
  deleteContact,
  postContacts,
} from '../../../redux/phonebookRedux/phonebookOperations';

const PhonebookServis = () => { 
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);
  const filter = useSelector(getFilterSelector);
 

  const handleChengeFilter = value => {
    dispatch(contactFilter(value.target.value));
  };

  const handleSubmit = todo => {
    if (
      todos.find(
        ({ name, number }) => name === todo.name || number === todo.number,
      )
    ) {
      alert(`${todo.name} is already in contacts`);
      return;
    }
    dispatch(postContacts(todo));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <>
      <PhonebookFormServis onSubmit={handleSubmit} />
      {todos.length > 1 && (
        <Filter filter={filter} onChengeFilter={handleChengeFilter} />
      )}

      <TodoList onDeleteContact={handleDeleteContact} />
    </>
  );
};

export default PhonebookServis;
