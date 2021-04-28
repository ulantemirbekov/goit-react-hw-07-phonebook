import { createAction } from '@reduxjs/toolkit';

export const contactAddRequest = createAction('Phonbook/Add/Request');
export const contactAddSuccess = createAction('Phonbook/Add/Success');
export const contactAddFailor = createAction('Phonbook/Add/Failor');

export const contactPostRequest = createAction('Phonbook/Post/Request');
export const contactPostSuccess = createAction('Phonbook/Post/Success');
export const contactPostFailor = createAction('Phonbook/Post/Failor');

export const contactDeleteRequest = createAction(
  'Phonbook/Delete/Request',
);
export const contactDeleteSuccess = createAction(
  'Phonbook/Delete/Success',
);
export const contactDeleteFailor = createAction('Phonbook/Delete/Failor');

export const contactFilter = createAction('Phonbook/ChengeFilter');
