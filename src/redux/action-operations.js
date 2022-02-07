import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./actions";
import { saveContact, deleteContact } from "../utils/fetchContactsAPI";

const addContact = (contactItem) => (dispatch) => {
  dispatch(addContactRequest());
  saveContact(contactItem)
    .then((data) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err)));
};

const removeContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    const response = await deleteContact(contactId);
    dispatch(deleteContactSuccess(response.data));
  } catch (err) {
    dispatch(deleteContactError(err));
  }
};

export default {addContact, removeContact}