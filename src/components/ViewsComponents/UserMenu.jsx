import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/authRedux/authSelectors';
import { logOut } from '../../redux/authRedux/authOperations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome,{name} </span>
      <button  type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
