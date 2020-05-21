import React, { Component } from 'react';

import config from '../../config';

class Interests extends Component {
  render() {
    const { interests, volunteerActivities } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-heart" /> Interests
          </h2>
          <p>Apart from being a web developer, I enjoy</p>
          <ul>
            {interests.map(interest => {
              return (
                <li key={Math.random()}>
                  <a
                    href={interest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {interest.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-smile" /> Volunteering
          </h2>
          <ul>
            {volunteerActivities.map(activity => {
              return (
                <li key={Math.random()}>
                  <a
                    href={activity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {activity.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Interests;
