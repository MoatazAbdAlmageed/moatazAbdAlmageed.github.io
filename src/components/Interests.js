import React, { Component } from 'react';
import config from '../../config';
import Wrapper from './Wrapper';

class Interests extends Component {
  render() {
    const { interests, volunteerActivities } = config;

    return (
      <Wrapper id="interests">
        <div className="w-100">
          <h2>
            <i className="fa fa-heart" /> Interests
          </h2>
          <ul className="mb-5">
            {interests.map((interest) => {
              const { url, title, sites } = interest;
              return (
                <li key={Math.random()}>
                  {url === '#' ? (
                    <p>{title}</p>
                  ) : (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  )}

                  {sites && (
                    <ul>
                      {sites.map((site) => {
                        return (
                          <li key={Math.random()}>
                            <a
                              href={site.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {site.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <h2>
            <i className="fa fa-smile" /> Volunteering
          </h2>
          <ul>
            {volunteerActivities.map((activity) => {
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
      </Wrapper>
    );
  }
}

export default Interests;
