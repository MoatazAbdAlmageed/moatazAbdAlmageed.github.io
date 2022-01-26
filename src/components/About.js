import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import config from '../../config';
import resume from '../assets/files/moataz_mohammady_resume.pdf';
import avatar from '../assets/img/avatar.jpg';
import SkillsIcons from '../components/SkillsIcons';

class About extends Component {
  render() {
    const { firstName, lastName, position, description, socialLinks } = config;
    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <Stack>
            <Box>
              <Text className="lead">Hello!, my name is</Text>
              <Heading>
                {firstName} {lastName}
              </Heading>
            </Box>
            <Box>
              <p className="d-lg-none text-center">
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2 avatar"
                  alt="avatar"
                  src={avatar}
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
              <div className="social-icons mt-5">
                {socialLinks.map(social => {
                  const { icon, url, name, show } = social;
                  if (!show) {
                    return;
                  }
                  return (
                    <a
                      key={url}
                      href={url}
                      title={name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa ${icon}`} />
                    </a>
                  );
                })}
              </div>
            </Box>

            <Box>
              <a href={resume} download>
                <Button colorScheme="blue" size="lg">
                  <i className="fa fa-file-pdf-o" /> <span>&nbsp;</span>{' '}
                  Download Resume
                </Button>
              </a>
            </Box>
          </Stack>
        </div>
      </section>
    );
  }
}

export default About;
