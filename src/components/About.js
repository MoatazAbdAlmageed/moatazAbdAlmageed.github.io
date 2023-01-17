import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  BsCloudDownloadFill,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs';
import React, { Component } from 'react';

import { Link } from 'gatsby';
import avatar from '../assets/img/avatar.jpg';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';

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
      >
        <Box align="center">
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
            _hover={{
              transform: 'scaleX(-1)',
            }}
          />
          <Text align="center" padding="3em" fontSize="1.4em">
            With 8 years of experience as a Full Stack Web Developer, I am
            highly skilled and passionate about my work. I currently work for
            Wuilt and am eager to take on more challenging projects and expand
            my expertise in the field. My experience includes developing web
            applications using HTML5, CSS3, JavaScript, Node.js, React.js, PHP,
            Laravel, and WordPress. Additionally, I have experience with
            databases such as MySQL and MongoDB. With my knowledge and passion
            for web development, I look forward to taking on more work and
            increasing my skillset as a Web Developer.
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
              _hover={{ bg: 'orange' }}
              icon={<BsGithub size="28px" />}
            />
          </Link>
          <Link to={linkedin.url} target="_blank">
            <IconButton
              aria-label="BsLinkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
          <Link to={youtube.url} target="_blank">
            <IconButton
              aria-label="BsYoutube"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsYoutube size="28px" />}
            />
          </Link>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsEnvelope size="28px" />}
            />
          </a>
        </Box>
        <Box mt={5}>
          <a href={resume} download>
            <Button
              bg="orange"
              color="white"
              size="lg"
              _hover={{ bg: 'gray.800' }}
            >
              <IconButton
                aria-label="BsCloudDownloadFill"
                variant="ghost"
                size="lg"
                isRound={true}
                icon={<BsCloudDownloadFill size="28px" />}
              />
              Resume
            </Button>
          </a>
        </Box>
      </Flex>
    );
  }
}

export default About;
