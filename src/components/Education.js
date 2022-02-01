import React, { Component } from 'react';
import config from '../../config';
import Wrapper from './Wrapper';

class Education extends Component {
  render() {
    const { education } = config;

    return (
      <Wrapper id="education">
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-graduation-cap" /> Education
          </h2>

          {education.map((education) => {
            const { place, url, title, period } = education;
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
                  <span className="badge badge-secondary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

export default Education;
