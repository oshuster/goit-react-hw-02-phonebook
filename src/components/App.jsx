import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
// import PhoneBook from './PhoneBook/PhoneBook';

import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  fetchContact = contact => {
    const currentContacts = this.state.contacts;
    this.setState({
      contacts: [...currentContacts, { id: nanoid(), ...contact }],
    });
  };
  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        {/* <PhoneBook /> */}
        <ContactForm fetchContact={this.fetchContact} />
        <h2>Contacts</h2>
        {/* Filter */}
        <ContactList />
      </div>
    );
  }
}
export default App;
