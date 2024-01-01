import { Component } from 'react';
import css from './filter.module.css';

class Filter extends Component {
  state = {};

  filterValue = e => {
    console.log(e.target.value);
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

// <form className={`d-flex ${css.search_form}`} role="search">
//   <input
//     className="form-control me-2"
//     type="search"
//     placeholder="Search"
//     aria-label="Search"
//   />
//   <button className="btn btn-outline-success" type="submit">
//     Search
//   </button>
// </form>;
