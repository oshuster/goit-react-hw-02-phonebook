import { Component } from 'react';
import css from './contactList.module.css';

class ContactList extends Component {
  state = {};
  render() {
    return (
      <>
        <form className={`d-flex ${css.search_form}`} role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <ul className="list-group">
          <li className={`list-group-item ${css.list_item}`}>
            An item
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={`list-group-item ${css.list_item}`}>
            A second item
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={`list-group-item ${css.list_item}`}>
            A third item
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={`list-group-item ${css.list_item}`}>
            A fourth item
            <button type="button" className="btn btn-primary btn-sm">
              Small button
            </button>
          </li>
          <li className={`list-group-item ${css.list_item}`}>
            And a fifth one
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
