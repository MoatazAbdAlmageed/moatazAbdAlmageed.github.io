import React, { Component } from 'react';
import config from '../../config';
import Project from './Project';
import { Heading } from '@chakra-ui/react';

class Projects extends Component {
  render() {
    const { socialLinks, projects } = config;
    const { url, name, icon } = socialLinks.find(
      ({ name }) => name === 'Behance'
    );
    return (
      <section
        className="resume-section p-3  d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <Heading as="h1" size="4xl" isTruncated>
            <i className="fa fa-keyboard" /> Projects
          </Heading>
          <div>
            {projects
              .filter(({ show }) => show == true)
              .sort((a, b) => b.year - a.year)
              .map(project => (
                <Project project={project} />
              ))}
          </div>

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
      </section>
    );
  }
}

export default Projects;
