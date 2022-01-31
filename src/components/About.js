import {
  Box,
  Button,
  Grid,
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
              alt={`${firstName} ${lastName}`}
            />
          </p>
        </Box>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
        >
          <Box>
            <Box>
              <p className="position">
                I am a {position} with +{new Date().getFullYear() - 2016} years
                of experience, {description}{' '}
              </p>
            </Box>

            <Box mt={5}>
              <Link to="https://github.com/MoatazAbdAlmageed" target="_blank">
                <IconButton
                  aria-label="BsGithub"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: 'green.300' }}
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
                  _hover={{ bg: 'green.300' }}
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
                  _hover={{ bg: 'green.300' }}
                  icon={<BsBehance size="28px" />}
                />
              </Link>
            </Box>

            <Box mt={5}>
              <a href={resume} download>
                <Button
                  bg="green.300"
                  color="white"
                  size="lg"
                  _hover={{ bg: 'green.400' }}
                >
                  <i className="fa fa-file-pdf-o" /> <span>&nbsp;</span>{' '}
                  Download Resume
                </Button>
              </a>
            </Box>
          </Box>

          <Box>
            <SkillsIcons />
          </Box>
        </Grid>
      </Stack>
    );
  }
}

export default About;
