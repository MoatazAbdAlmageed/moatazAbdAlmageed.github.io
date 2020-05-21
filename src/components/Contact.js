import React from 'react';

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
    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-envelope-open" /> Contact
          </h2>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xgenoded"
            method="POST"
          >
            <div class="form-group">
              <label>Email</label>
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label>Message</label>

              <textarea
                class="form-control"
                name="message"
                rows="3"
                placeholder="Enter message"
              ></textarea>
            </div>

            {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
          </form>
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
