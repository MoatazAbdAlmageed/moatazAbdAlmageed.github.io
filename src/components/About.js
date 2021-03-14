import React, { Component } from 'react';
import config from '../../config';
import avatar from '../assets/img/avatar.jpg';
import SkillsIcons from '../components/SkillsIcons';
import { Stack, Box } from '@chakra-ui/react';

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
              <p className="lead">Hi!, my name is</p>
              <h1 className="mb-0">
                {firstName}
                <span className="text-primary">{lastName}</span>
              </h1>
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
          </Stack>
        </div>
      </section>
    );
  }
}

export default About;
