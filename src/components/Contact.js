import React from 'react';
import config from '../../config';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    const { FORMSPREE } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-envelope-open" /> Contact
          </h2>

          {status === 'SUCCESS' ? (
            <p className="text-success">Thank you for contacting!</p>
          ) : (
            <>
              <h4>Question or query?, help is at hand</h4>
              <form
                onSubmit={this.submitForm}
                action={`https://formspree.io/${FORMSPREE}`}
                method="POST"
              >
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder="Enter message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-success">Submit</button>
                </div>
              </form>
            </>
          )}
          {status === 'ERROR' && (
            <p className="text-danger">Ooops! There was an error.</p>
          )}
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
