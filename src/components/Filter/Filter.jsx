import { Component } from 'react';
import css from './filter.module.css';

class Filter extends Component {
  state = {};

  filterValue = e => {
    const contactName = e.target.value.toLowerCase().trim();
    this.props.findContact(contactName);
  };

  render() {
    return (
      <input
        className={`form-control me-2 ${css.search}`}
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={this.filterValue}
      />
    );
  }
}

export default Filter;
