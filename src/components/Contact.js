import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsBehance, BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail, MdPhone } from 'react-icons/md';
import config from '../../config';

export default function contact() {
  const { phone, phone2, whatsapp, email, FORMSPREE } = config;
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
    <Container
      id="contact"
      maxW="full"
      mt={0}
      overflow="hidden"
      borderRadius="lg"
      bg="#F7FAFC"
    >
      <Flex>
        <Box>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box x>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#333" pb={5}>
                    Are you working on something great? I would love to help
                    make it happen! <br />
                    Drop me a letter and start your project right now! Just do
                    it.
                  </Text>
                  <Box>
                    <VStack spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        leftIcon={<MdPhone color="blue.400" size="20px" />}
                      >
                        {phone}
                      </Button>
                      <Button
                        size="md"
                        leftIcon={<MdPhone color="blue.400" size="20px" />}
                      >
                        {phone2}
                      </Button>
                      <Button
                        size="md"
                        leftIcon={<MdPhone color="blue.400" size="20px" />}
                      >
                        {whatsapp}
                      </Button>

                      <Button
                        size="md"
                        leftIcon={<MdEmail color="blue.400" size="20px" />}
                      >
                        {email}
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Box mt={5}>
                      <Link
                        to="https://github.com/MoatazAbdAlmageed"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="BsGithub"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: 'blue.400' }}
                          icon={<BsGithub size="28px" />}
                        />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/moatazabdelmageed"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="BsLinkedin"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: 'blue.400' }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </Link>
                      <Link
                        to="https://www.behance.net/moatazmohammady"
                        target="_blank"
                      >
                        <IconButton
                          aria-label="BsBehance"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: 'blue.400' }}
                          icon={<BsBehance size="28px" />}
                        />
                      </Link>
                    </Box>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
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
                            <Button
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              _hover={{}}
                            >
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
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
