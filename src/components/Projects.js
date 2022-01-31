import { Grid, Heading, Icon, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';
import { FiTerminal } from 'react-icons/fi';
import config from '../../config';
import Project from './Project';

class Projects extends Component {
  render() {
    const { projects } = config;
    return (
      <Stack
        className="resume-section p-3  d-flex justify-content-center"
        id="projects"
        mb={10}
        mt={10}
      >
        <Heading as="h2" isTruncated pt={4} pb={4}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiTerminal}
          />{' '}
          Projects
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
          {projects
            .filter(({ show }) => show == true)
            .sort((a, b) => b.year - a.year)
            .map((project) => (
              <Project key={project.url} project={project} />
            ))}
        </Grid>
      </Stack>
    );
  }
}

export default Projects;
