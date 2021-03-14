import React, { Component } from 'react';
import config from '../../config';

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
          <h2 className="mb-5">
            <i className="fa fa-keyboard" /> Projects
          </h2>

          <div>
            {projects
              .sort((a, b) => b.year - a.year)
              .map(({ title, url, type, icon, year }) => {
                return (
                  <p>
                    <a
                      key={url}
                      href={url}
                      title={title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa ${icon}`} /> <span>&nbsp;</span> {title}{' '}
                      - {year}
                    </a>
                  </p>
                );
              })}
          </div>

          <div>
            <p>
              Kindly check <span>&nbsp;</span>
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
              for more projects.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
