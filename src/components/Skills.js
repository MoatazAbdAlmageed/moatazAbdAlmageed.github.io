import React, { Component } from 'react';
import config from '../../config';

class Skills extends Component {
  render() {
    const { skills } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-code" /> Skills
          </h2>
          {skills.map(type => {
            return (
              <div key={Math.random()} className="items">
                <h4>{type.title}</h4>
                <ul className="list-inline dev-icons">
                  {type.skills.map(skill => (
                    <li key={Math.random()}>
                      <i
                        title={skill.title}
                        className={'fab fa-' + skill.icon}
                      />{' '}
                      <a href={skill.url}>{skill.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}{' '}
        </div>
      </section>
    );
  }
}

export default Skills;
