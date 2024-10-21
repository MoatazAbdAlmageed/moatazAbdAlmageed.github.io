import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text
} from '@chakra-ui/react';
import React, { Component } from 'react';
import {
  BsCloudDownloadFill,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsYoutube
} from 'react-icons/bs';

import { Link } from 'gatsby';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';
import avatar from '../assets/img/avatar.png';
import Divider from './Divider';

class About extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      socialLinks: { linkedin, github, youtube },
    } = config;
    return (
      <Flex
        id="about"
        align={'center'}
        direction="column"
        pt={{ base: 100, md: 20 }}
        bg="#F7FAFC"
      >
        <Box align="center" padding={{ md: '10', sm: '5' }}>
          <Text>Hello!, {`I'm`}</Text>

          <Heading>
            {firstName} {lastName}
          </Heading>

          <Image
            borderRadius="full"
            boxSize="150px"
            src={avatar}
            alt={`${firstName} ${lastName}`}
            p={5}
          />
          <Text align="center" padding="1em" fontSize="1.4em" width={{ md: '60%', sm: '95%' }} >
            Full Stack Web Developer with expertise in HTML5, CSS3,
            JavaScript, Node.js, React.js, PHP, Laravel, and WordPress. Experienced
            with MySQL and MongoDB databases. Currently employed at Wuilt,
            seeking challenging projects to expand skills and expertise in web
            development.
          </Text>
        </Box>
        <Box
          width={{
            base: '100%',
            sm: '100%',
            md: '50%',
          }}
        ></Box>
        <Box mt={5}>
          <Link to={github.url} target="_blank">
            <IconButton
              aria-label="BsGithub"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange.400' }}
              icon={<BsGithub size="28px" />}
            />
          </Link>
          <Link to={linkedin.url} target="_blank">
            <IconButton
              aria-label="BsLinkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange.400' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
          <Link to={youtube.url} target="_blank">
            <IconButton
              aria-label="BsYoutube"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange.400' }}
              icon={<BsYoutube size="28px" />}
            />
          </Link>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange.400' }}
              icon={<BsEnvelope size="28px" />}
            />
          </a>
        </Box>
        <Box mt={5}>
          <a href={resume} download>
            <Button
              bg="orange.400"
              color="white"
              size="lg"
              _hover={{ bg: 'gray.800' }}
            >
              <IconButton
                aria-label="BsCloudDownloadFill"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: 'orange.400' }}
                icon={<BsCloudDownloadFill size="28px" />}
              />
              Resume
            </Button>
          </a>
        </Box>
        <Divider />
      </Flex>
    );
  }
}

export default About;
