import React, { Component } from 'react';
import config from '../../config';

class Skills extends Component {
  render() {
    const { skills, skillsAdImag } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-code" /> Skills
          </h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            {skills.map(skill => {
              return (
                <li key={Math.random()} className="list-inline-item">
                  <i title={skill} className={'fab fa-' + skill} />
                </li>
              );
            })}{' '}
            {skillsAdImag.map(img => {
              return (
                <li key={Math.random()} className="list-inline-item">
                  <img alt="skill" src={img} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
