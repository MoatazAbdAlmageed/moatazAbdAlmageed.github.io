import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
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
        <Heading as="h2" isTruncated pt={4} pb={4}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FaRegEnvelope}
          />{' '}
          Contact
        </Heading>

        <Text>
          Are you working on something great? I would love to help make it
          happen! Drop me a letter and start your project right now! Just do it.
        </Text>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
        >
          <Box>
            <ul className="subheading">
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
          </Box>
          <Box align="left">
            <form
              onSubmit={this.submitForm}
              action={`https://formspree.io/${FORMSPREE}`}
              method="POST"
            >
              <div className="form-group">
                <label>Name</label>
                <Input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <Input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Message</label>

                <Textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  placeholder="Enter message"
                ></Textarea>
              </div>
              <Stack direction="row" spacing={4} pt={2}>
                <button>
                  <Button
                    bg="green.300"
                    color="white"
                    size="lg"
                    _hover={{ bg: 'green.400' }}
                  >
                    Submit
                  </Button>
                </button>
              </Stack>
            </form>

            {status === 'SUCCESS' && (
              <p className="text-success">
                Thank you for your message. It has been sent.{' '}
              </p>
            )}

            {status === 'ERROR' && (
              <p className="text-danger">Ooops! There was an error.</p>
            )}
          </Box>
        </Grid>
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
