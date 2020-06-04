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

          <ul className="list-inline dev-icons">
            {skills.map(skill => {
              return (
                <li key={Math.random()}>
                  <i title={skill.title} className={'fab fa-' + skill.icon} />{' '}
                  {skill.title}
                </li>
              );
            })}{' '}
            {skillsAdImag.map(skill => {
              return (
                <li key={Math.random()}>
                  <img alt={skill.title} src={skill.img} />
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
