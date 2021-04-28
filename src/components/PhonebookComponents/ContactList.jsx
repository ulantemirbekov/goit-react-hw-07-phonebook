import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  getIsLoadingSelector,
  filtrContactList,
} from '../../redux/phonebookRedux/phonebookSelectors';

const TodoList = ({ onDeleteContact }) => {
  const isLoading = useSelector(getIsLoadingSelector);
  const todos = useSelector(filtrContactList);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {todos.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <Button onClick={() => onDeleteContact(id)}>x</Button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;

TodoList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
