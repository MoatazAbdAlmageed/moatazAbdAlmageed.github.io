import { Icon } from '@chakra-ui/icons';
import { Box, Grid, Heading, Link, Spacer, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';
import Wrapper from './Wrapper';

class Experience extends Component {
  render() {
    const { jobs } = config;

    return (
      <Wrapper id="experience" bg="#F7FAFC">
        <Stack spacing={0} align={'center'}>
          <Heading>
            {' '}
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
        </Stack>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(5, 1fr)',
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
                _hover={{ bg: 'gray.100' }}
              >
                <Heading size="md" color="orange">
                  {occupation}
                </Heading>
                <Link to={url}> @{company} </Link>
                <h4> {period}</h4>

                <Stack pt={5}>
                  <Heading size="sm">Responsibilities</Heading>
                  <ul className="responsibilities">
                    {responsibilities.map((responsibility) => {
                      return <li key={Math.random()}>{responsibility}</li>;
                    })}
                  </ul>
                </Stack>

                <Spacer />

                <Stack pt={5}>
                  <Heading size="sm"> Projects</Heading>
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
                </Stack>

                <p>{description}</p>
              </Box>
            );
          })}
        </Grid>
      </Wrapper>
    );
  }
}

export default Experience;
