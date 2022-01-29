import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import { BsBehance, BsGithub, BsLinkedin } from 'react-icons/bs';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';
import avatar from '../assets/img/avatar.jpg';
import SkillsIcons from '../components/SkillsIcons';

class About extends Component {
  render() {
    const { firstName, lastName, position, description } = config;
    return (
      <Stack id="about" mb={10}>
        <Box>
          <Text className="lead">Hello!, my name is</Text>
          <Heading>
            {firstName} {lastName}
          </Heading>
        </Box>
        <Box>
          <p className="d-lg-none text-center">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={avatar}
              alt="Dan Abramov"
            />
          </p>
        </Box>
        <Box>
          <p className="position">I am a {position}</p>
          <p className="lead">{description}</p>
        </Box>

        <Box>
          <SkillsIcons />
        </Box>
        <Box>
          <Link to="https://github.com/MoatazAbdAlmageed" target="_blank">
            <IconButton
              aria-label="BsGithub"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
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
              _hover={{ bg: '#0D74FF' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
          <Link to="https://www.behance.net/moatazmohammady" target="_blank">
            <IconButton
              aria-label="BsBehance"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<BsBehance size="28px" />}
            />
          </Link>
        </Box>

        <Box>
          <a href={resume} download>
            <Button colorScheme="green" size="lg">
              <i className="fa fa-file-pdf-o" /> <span>&nbsp;</span> Download
              Resume
            </Button>
          </a>
        </Box>
      </Stack>
    );
  }
}

export default About;
