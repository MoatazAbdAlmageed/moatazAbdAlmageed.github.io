import { Heading, Stack } from '@chakra-ui/react';
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
    const { phone, phone2, whatsapp, email, FORMSPREE } = config;

    return (
      <Stack
        className="resume-section p-3  d-flex align-items-center"
        id="contact"
        mb={10}
        mt={10}
      >
        <div className="w-100">
          <Heading as="h2" isTruncated>
            <i className="fa fa-envelope-open" /> Contact
          </Heading>

          <ul className="subheading mt-5">
            <li>
              <i className="fa fa-mobile"> </i> &nbsp;{' '}
              <a href={`tel:${phone}`}>{phone}</a>{' '}
            </li>
            <li>
              <i className="fa fa-mobile"> </i> &nbsp;{' '}
              <a href={`tel:${phone2}`}>{phone2}</a>{' '}
            </li>
            <li>
              <i className="fa fa-whatsapp" /> &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              >
                {phone}
              </a>
            </li>
            <li>
              <i className="fa fa-envelope" /> &nbsp;
              <a href={`mailto:${email}`}>{email}</a>
            </li>{' '}
          </ul>

          {status === 'SUCCESS' ? (
            <p className="text-success">Thank you for contacting!</p>
          ) : (
            <>
              <p>
                Are you working on something great? I would love to help make it
                happen! Drop me a letter and start your project right now! Just
                do it.
              </p>
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
      </Stack>
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
