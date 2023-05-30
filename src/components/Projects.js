import { Grid, Heading, Icon, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';

import Divider from './Divider';
import { FiTerminal } from 'react-icons/fi';
import Project from './Project';
import Wrapper from './Wrapper';
import config from '../../config';

class Projects extends Component {
  render() {
    const { projects } = config;
    return (
      <Wrapper id="projects">
        <Stack spacing={0} align={'center'} pt={20}>
          <Heading>
            {' '}
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
        <Divider />
      </Wrapper>
    );
  }
}

export default Projects;
