import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./actions";
import {
  saveContact,
  deleteContact,
  getContact,
} from "../utils/fetchContactsAPI";

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
    dispatch(deleteContactSuccess(+response.id));
  } catch (err) {
    dispatch(deleteContactError(err));
  }
};

const getContactsArray = () => (dispatch) => {
  dispatch(getContactRequest());
  getContact()
    .then((data) => dispatch(getContactSuccess(data)))
    .catch((err) => dispatch(getContactError(err)));
};

export { addContact, removeContact, getContactsArray };
