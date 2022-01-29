import { Box, Grid, Heading, Spacer, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import config from '../../config';

class Experience extends Component {
  render() {
    const { jobs } = config;

    return (
      <section
        className="resume-section p-3  d-flex justify-content-center"
        id="experience"
        mb={10}
      >
        <div className="w-100">
          <Heading as="h2" isTruncated pt={4} pb={4}>
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
                                <i
                                  className="fa fa-globe"
                                  aria-hidden="true"
                                ></i>
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
        </div>
      </section>
    );
  }
}

export default Experience;
