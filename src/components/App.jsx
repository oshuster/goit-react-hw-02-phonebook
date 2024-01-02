import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    filter: '',
  };

  regExpPattern = {
    name: new RegExp(
      "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    ),
    number: new RegExp(
      '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
    ),
  };

  fetchContact = ({ name, number }) => {
    const { contacts } = this.state;
    // перевірка на коректність введених даних
    if (
      this.regExpPattern.name.test(name) &&
      this.regExpPattern.number.test(number)
    ) {
      // перевірка на наявність контакту по номеру
      if (!contacts.some(contact => contact.number === number)) {
        this.setState({
          contacts: [...contacts, { id: nanoid(), name, number }],
        });
      } else {
        alert('Такий контакт вже існує');
        return;
      }
    } else {
      alert('Введені дані некоректні');
      return;
    }
  };
  deleteContact = id => {
    const { contacts } = this.state;
    const newList = contacts.filter(contact => contact.id !== id);

    const { filteredContacts } = this.state;
    const newFilteredList = filteredContacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newList, filteredContacts: newFilteredList });
  };

  findContact = contactName => {
    const { contacts } = this.state;
    const sortedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactName)
    );
    this.setState({
      filteredContacts: sortedContacts,
      filter: `${contactName}`,
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm fetchContact={this.fetchContact} />
        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactList
          contactlist={
            !this.state.filter
              ? this.state.contacts
              : this.state.filteredContacts
          }
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
