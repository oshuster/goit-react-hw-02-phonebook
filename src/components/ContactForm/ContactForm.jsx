import { Component } from 'react';

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            Please enter your name.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Phone number
          </label>
          <input type="tel" className="form-control" id="exampleInputPhone1" />
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
