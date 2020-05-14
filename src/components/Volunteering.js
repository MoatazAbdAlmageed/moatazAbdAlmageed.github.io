import React, { Component } from 'react';

import config from '../../config';

class Volunteering extends Component {
  render() {
    const { volunteerActivities } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="volunteering"
      >
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

export default Volunteering;
