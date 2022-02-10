import axios from "axios";
axios.defaults.baseURL =
  "https://61fed12aa58a4e00173c99ed.mockapi.io/phoneBook";
const saveContact = (contact) => {
  return axios
    .post("/contacts", contact)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const deleteContact = (contactId) => {
    return axios
      .delete(`/contacts/${contactId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

const getContact = () => {
  return axios
  .get('/contacts')
  .then(res => res.data)
  .catch(err => console.log(err));
};

export { saveContact, deleteContact, getContact};
