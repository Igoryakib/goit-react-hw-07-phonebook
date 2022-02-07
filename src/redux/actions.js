import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from './action-types';

const addContactRequest = createAction(actionTypes.ADD_CONTACT_REQUEST);
const addContactSuccess = createAction(actionTypes.ADD_CONTACT_SUCCESS);
const addContactError = createAction(actionTypes.ADD_CONTACT_ERROR);

const deleteContactRequest = createAction(actionTypes.DELETE_CONTACT_REQUEST);
const deleteContactSuccess = createAction(actionTypes.DELETE_CONTACT_SUCCESS);
const deleteContactError = createAction(actionTypes.DELETE_CONTACT_ERROR);

export default {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
};