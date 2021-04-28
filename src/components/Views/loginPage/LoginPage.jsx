import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/authRedux/authOperations';
import SignIn from './SignIn'

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <SignIn onSubmitForm={handleSubmit} onChangePassword={handleChangePassword} onChangeEmail={handleChangeEmail}/>
      
    </div>
  );
};

export default LoginPage;
