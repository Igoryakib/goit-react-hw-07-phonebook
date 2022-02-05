import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./PhoneBook.module.scss";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";
const shortid = require("shortid");

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  static propTypes = {
    btnText: PropTypes.string,
  };

  verifyData = () => {
    this.state.name.toLocaleLowerCase();
    this.state.contacts.map((item) => {
      item.name.toLocaleLowerCase();
      if (item.name === this.state.name || item.number === this.state.number) {
        alert(`${this.state.name} is already in contacts`);
        return this.setState({
          name: "",
          number: "",
        });
      }
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.verifyData();
  };

  addContact = (event) => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      id: shortid.generate(),
      number: this.state.number,
    };
    this.setState((prevState) => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
    this.setState({
      name: "",
      number: "",
    });
  };

  onHandleDelete = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const { btnText } = this.props;
    const { name, contacts, number, filter } = this.state;
    const { input_form, form_add_contact, label_form, submit_btn, title_list } =
      styles;

    const normalizedFilterArray = filter.toLowerCase();
    const filteredArray = contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilterArray)
    );

    return (
      <>
        <form className={form_add_contact} onSubmit={this.addContact}>
          <label className={label_form}>
            Name
            <input
              className={input_form}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
              value={name}
            />
          </label>
          <label className={label_form}>
            Number
            <input
              className={input_form}
              value={number}
              onChange={this.handleOnChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={submit_btn} type="submit">
            {btnText}
          </button>
        </form>
        <h2 className={title_list}>Contacts</h2>
        <div>
          <Filter value={filter} handleOnChange={this.handleOnChange} />
          <ListContacts
            contacts={filteredArray}
            btnText="Delete"
            onDeleteContact={this.onHandleDelete}
          />
        </div>
      </>
    );
  }
}

export default PhoneBook;
