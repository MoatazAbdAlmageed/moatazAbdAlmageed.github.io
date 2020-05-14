import React, { Component } from 'react';

import config from '../../config';

export class Certifications extends Component {
  render() {
    const { certifications } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-trophy" /> Awards &amp; Certifications
          </h2>
          <ul className="fa-ul mb-0">
            {certifications.map(certification => {
              const { place, url, title, issued, description } = certification;
              return (
                <li key={Math.random()}>
                  <i className="fa-li fa fa-star text-warning" />
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>{' '}
                  | {place}
                  <p>{description}</p>
                  <div className="text-md-right">
                    <span className="badge badge-dark">{issued}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Certifications;
