import { Component } from 'react';
import css from './contactList.module.css';

class ContactList extends Component {
  state = {};
  getId = e => {
    const id = e.target.dataset.id;
    this.props.deleteContact(id);
  };
  render() {
    const items = this.props.contactlist;
    const elements = items.map(contact => (
      <li key={contact.id} className={css.list_item}>
        <span className={css.list_title}>{contact.name}</span>
        <button
          data-id={contact.id}
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.getId}
        >
          Delete
        </button>
      </li>
    ));
    return (
      <>
        <ul className="list-group">{elements}</ul>
      </>
    );
  }
}

export default ContactList;
