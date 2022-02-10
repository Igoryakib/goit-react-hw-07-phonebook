import React, { Component } from "react";
import { connect } from "react-redux";
import {getContactsArray} from '../redux/action-operations';

import SectionPhoneBook from "./SectionPhoneBook/SectionPhoneBook";
import PhoneBook from "./Form/PhoneBook";

class App extends Component {
    state ={};
    componentDidMount(){
        this.props.getContacts()
    }
  render() {
    return (
      <SectionPhoneBook title="PhoneBook">
        <PhoneBook btnText="Add contact" />
      </SectionPhoneBook>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    getContacts: () => dispatch(getContactsArray())
});

export default connect(null, mapDispatchToProps)(App);
