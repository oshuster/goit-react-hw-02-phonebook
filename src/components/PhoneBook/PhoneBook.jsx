import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';

import css from './phoneBook.module.css';
import ContactList from 'components/ContactList/ContactList';

class PhoneBook extends Component {
  state = {};
  render() {
    return (
      <div className={css.wrapper}>
        <h1>{this.props.title}</h1>
        <ContactForm />
        <ContactList />
      </div>
    );
  }
}

export default PhoneBook;
