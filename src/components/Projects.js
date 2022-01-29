import { Grid, Heading, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';
import config from '../../config';
import Project from './Project';

class Projects extends Component {
  render() {
    const { socialLinks, projects } = config;
    const { url, name, icon } = socialLinks.find(
      ({ name }) => name === 'Behance'
    );
    return (
      <Stack
        className="resume-section p-3  d-flex justify-content-center"
        id="projects"
        mb={10}
        mt={10}
      >
        <div className="w-100">
          <Heading as="h2" isTruncated pt={4} pb={4}>
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

          <div>
            <p>
              For more projects kindly check <span>&nbsp;</span>
              <i className={`fa ${icon}`} />{' '}
              <a
                key={url}
                href={url}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>&nbsp;</span> {url}{' '}
              </a>{' '}
            </p>
          </div>
        </div>
      </Stack>
    );
  }
}

export default Projects;
