import axios from 'axios';

import {
  contactAddRequest,
  contactAddSuccess,
  contactAddFailor,
  contactDeleteSuccess,
  contactDeleteFailor,
  contactPostRequest,
  contactPostSuccess,
  contactPostFailor,
} from './phonebookActions';


export const getContactsList = () => dispatch => {

  dispatch(contactAddRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactAddSuccess(data)))
    .catch(error => {
      dispatch(contactAddFailor(error.message));
    });
};

export const deleteContact = id => dispatch => {
  dispatch(contactAddRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactDeleteSuccess(id)))
    .catch(error => {
      dispatch(contactDeleteFailor(error.message));
    });
};

export const postContacts = contact => dispatch => {
  dispatch(contactPostRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactPostSuccess(data)))
    .catch(error => {
      dispatch(contactPostFailor(error.message));
    });
};
