import { Grid, Heading, Icon, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';

import { FiTerminal } from 'react-icons/fi';
import config from '../../config';
import Project from './Project';
import Wrapper from './Wrapper';

class Projects extends Component {
  render() {
    const { projects } = config;
    return (
      <Wrapper id="projects" bg="#fff">
        <Stack spacing={0} align={'center'} pt={20}>
          <Icon
            color="orange.400"
            fontSize="64"
            _groupHover={{
              color: 'white',
            }}
            as={FiTerminal}
          />{' '}
          <Heading>Projects</Heading>
        </Stack>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
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
      </Wrapper>
    );
  }
}

export default Projects;
