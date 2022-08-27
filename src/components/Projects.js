import { Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

import { FiTerminal } from 'react-icons/fi';
import { Link } from 'gatsby';
import Project from './Project';
import config from '../../config';

class Projects extends Component {
  render() {
    const { projects } = config;
    return (
      <Flex id="projects" direction="column" p={{ base: 5, md: 20 }}>
        <Stack spacing={0} align={'center'}>
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
          <Text>
            My projects{' '}
            <Link
              to="https://www.linkedin.com/in/moatazabdelmageed/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-globe" aria-hidden="true"></i>
              &nbsp; @linkedin
            </Link>
          </Text>
        </Stack>

        <Flex direction="column">
          {projects
            .filter(({ show }) => show == true)
            .sort((a, b) => b.year - a.year)
            .map((project) => (
              <Project key={project.url} project={project} />
            ))}
        </Flex>
      </Flex>
    );
  }
}

export default Projects;
