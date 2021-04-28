import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import PhoneBookForm from '../../PhonebookComponents/PhonebookForm';

const PhonebookFormServis = ({ onSubmit }) => {
 const [name, setName] = useState('');
 const [number, setNumber] = useState('');

 const handleSubmit = e => {
  e.preventDefault();
  if (!name || !number) return;

  const newTodo = {
   id: uuidv4(),
   name,
   number,
  };
  onSubmit(newTodo);
  setName('');
  setNumber('');
 };
 const handleInpuChangeName = e => {
  setName(e.target.value);
 };

 const handleInpuChangeNumber = e => {
  setNumber(e.target.value);
 };

 return (
  <>
   <PhoneBookForm
    name={name}
    number={number}
    onFormSubmit={handleSubmit}
    onInpuChangeName={handleInpuChangeName}
    onInpuChangeNumber={handleInpuChangeNumber}
   />
  </>
 );
};

export default PhonebookFormServis;
PhonebookFormServis.propTypes = {
 onSubmit: PropTypes.func.isRequired,
};
