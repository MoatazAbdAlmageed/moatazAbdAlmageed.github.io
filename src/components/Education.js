import React, { Component } from 'react';

import config from '../../config';

class Education extends Component {
  render() {
    const { education } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-graduation-cap" /> Education
          </h2>

          {education.map(education => {
            const { place, url, title, fromTO } = education;
            return (
              <div
                key={url}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <h3 className="mb-0">{place}</h3>
                  <div className="subheading mb-3">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{fromTO}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Education;
