import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import { BsBehance, BsGithub, BsLinkedin } from 'react-icons/bs';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';
import avatar from '../assets/img/avatar.jpg';
import SkillsIcons from './SkillsIcons';
import Wrapper from './Wrapper';

class About extends Component {
  render() {
    const { firstName, lastName, position } = config;
    return (
      <Wrapper id="about" align={'center'}>
        <Text>Hello!, {`I'm`}</Text>
        <Heading>
          {firstName} {lastName}
        </Heading>

        <Image
          borderRadius="full"
          boxSize="150px"
          src={avatar}
          alt={`${firstName} ${lastName}`}
        />

        <Text align="center">
          I am a {position} with +{new Date().getFullYear() - 2016} years of
          experience, Works as a full-time Web Developer for Wuilt.
          <br /> I am looking to take on more work and increase my skills as a
          Web Developer.
          <br /> {`I'm`} married and I have 2 boys Hamza and Bilal
        </Text>

        <SkillsIcons />
        <Box mt={5}>
          <Link to="https://github.com/MoatazAbdAlmageed" target="_blank">
            <IconButton
              aria-label="BsGithub"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
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
              _hover={{ bg: 'orange' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
          <Link to="https://www.behance.net/moatazmohammady" target="_blank">
            <IconButton
              aria-label="BsBehance"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: 'orange' }}
              icon={<BsBehance size="28px" />}
            />
          </Link>
        </Box>

        <Box mt={5}>
          <a href={resume} download>
            <Button
              bg="orange"
              color="white"
              size="lg"
              _hover={{ bg: 'orange' }}
            >
              <i className="fa fa-file-pdf-o" /> <span>&nbsp;</span> Download
              Resume
            </Button>
          </a>
        </Box>
      </Wrapper>
    );
  }
}

export default About;
