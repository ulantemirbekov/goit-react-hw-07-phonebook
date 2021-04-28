import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/authRedux/authOperations';
import SignInSide from './SignInSide'

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    
    setName('');
    setEmail('');
    setPassword('');
  };

  return (

  

    <div>

      <SignInSide 
            onChangeName={handleChangeName} 
            onChangeEmail={handleChangeEmail} 
            onChangePassword={handleChangePassword}
            onSubmitForm={handleSubmit}
             />
    </div>
  );
};
export default RegisterPage;
