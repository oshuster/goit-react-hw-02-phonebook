import { Component } from 'react';

import css from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  saveContact = e => {
    e.preventDefault();
    this.props.fetchContact(this.state);
    e.target.reset();
  };

  render() {
    return (
      <form className={css.save_form} onSubmit={this.saveContact}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-describedby="nameHelp"
            required
            onChange={this.handleInput}
          />
          <div id="nameHelp" className="form-text">
            Please enter your name.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPhone1"
            name="number"
            onChange={this.handleInput}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
