import { Component } from 'react';
import css from './contactList.module.css';

class ContactList extends Component {
  state = {};
  render() {
    return (
      <>
        <ul className="list-group">
          <li className={css.list_item}>
            <span className={css.list_title}>An item</span>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={css.list_item}>
            <span className={css.list_title}>A second item</span>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={css.list_item}>
            <span className={css.list_title}>A third item</span>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={css.list_item}>
            <span className={css.list_title}>A fourth item</span>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={css.list_item}>
            <span className={css.list_title}>And a fifth one</span>
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
        </ul>
      </>
    );
  }
}

export default ContactList;
