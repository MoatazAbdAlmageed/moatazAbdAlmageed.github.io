import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { BsPerson } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';
import { Icon } from '@chakra-ui/icons';
import { MdOutlineEmail } from 'react-icons/md';
import config from '../../config';

export default function contact() {
  const { FORMSPREE } = config;
  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
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
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <Flex id="contact" bg="#F7FAFC" direction="column" p={{ base: 5, md: 20 }}>
      <Box spacing={0} align={'center'}>
        <Heading>
          {' '}
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={GrContactInfo}
          />{' '}
          Contact
        </Heading>
        <Text align="center">
          Are you working on something great? I would love to help make it
          happen!
          <br /> Drop me a letter and start your project right now!
        </Text>
      </Box>

      <Grid
        gap={2}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        <Box></Box>
        <Box>
          <form
            onSubmit={submitForm}
            action={`https://formspree.io/${FORMSPREE}`}
            method="POST"
          >
            <FormControl id="name" pt={2}>
              <FormLabel>Your Name</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<BsPerson color="gray.800" />}
                />
                <Input type="text" name="name" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="email" pt={2}>
              <FormLabel>Mail</FormLabel>
              <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<MdOutlineEmail color="gray.800" />}
                />
                <Input type="text" name="email" size="md" />
              </InputGroup>
            </FormControl>
            <FormControl id="message" pt={2}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                borderColor="gray.300"
                _hover={{
                  borderRadius: 'gray.300',
                }}
                placeholder="message"
              />
            </FormControl>
            <FormControl id="name" float="right" pt={2}>
              <button>
                <Button variant="solid" bg="orange" color="white" _hover={{}}>
                  Send Message
                </Button>
              </button>
            </FormControl>

            {status === 'SUCCESS' && (
              <Text color="green">
                Thank you for your message. It has been sent.{' '}
              </Text>
            )}

            {status === 'ERROR' && (
              <Text color="red">Ooops! There was an error.</Text>
            )}
          </form>
        </Box>
      </Grid>
    </Flex>
  );
}
