import {
  Box,
  Grid,
  Heading,
  Icon,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';
class Experience extends Component {
  render() {
    const { jobs } = config;

    return (
      <Stack
        id="experience"
        bg="gray.50"
        className="resume-section  d-flex justify-content-center"
        mb={10}
      >
        <Heading as="h2" isTruncated pt={4} pb={4}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={TiStarburst}
          />{' '}
          Experience
        </Heading>
        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
        >
          {jobs.map((job) => {
            const {
              company,
              url,
              occupation,
              description,
              period,
              responsibilities,
              projects,
            } = job;
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                m={2}
                key={url}
                p={10}
                _hover={{ bg: 'green.300' }}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <Heading as="h3" size="sm">
                  {occupation}{' '}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    @{company}{' '}
                  </a>
                </Heading>
                <h4> {period}</h4>

                {responsibilities.length ? (
                  <div>
                    <Heading as="h5" size="sm">
                      Responsibilities
                    </Heading>
                    <ul className="responsibilities">
                      {responsibilities.map((responsibility) => {
                        return <li key={Math.random()}>{responsibility}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  ''
                )}

                <Spacer />
                {projects.length ? (
                  <div>
                    <Text fontSize="2xl">Projects</Text>
                    <ol className="projects">
                      {projects.map((project) => {
                        return (
                          <li key={Math.random()}>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-globe" aria-hidden="true"></i>
                              &nbsp;
                              {project.name}
                            </a>

                            {/* <ul className="technologies">
                                  {project.technologies.map((tech) => {
                                    return (
                                      <li key={Math.random()}>
                                        <span className="badge badge-secondary">
                                          {tech}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul> */}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                ) : (
                  ''
                )}

                <p>{description}</p>
              </Box>
            );
          })}
        </Grid>
      </Stack>
    );
  }
}

export default Experience;
