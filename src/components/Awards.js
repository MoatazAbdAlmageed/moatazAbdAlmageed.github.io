import React, { Component } from 'react';
import { Heading } from '@chakra-ui/react';

import config from '../../config';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <Heading as="h4" isTruncated>
            <i className="fa fa-trophy" /> Awards &amp; Certifications
          </Heading>
          <p>
            All my life I have been driven by my strong belief that education is
            important. I try to learn something new every single day.
          </p>
          <ul className="fa-ul mb-0">
            {certifications.map(certification => {
              const { place, url, title, issued, description } = certification;
              return (
                <li key={Math.random()} className="row">
                  <div className="col-10">
                    <i className="fa-li fa fa-star text-warning" />
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <b> {title}</b>
                    </a>{' '}
                    <span className="badge badge-secondary">{place}</span>
                    <p>{description}</p>
                  </div>

                  <div className="col-2">
                    <div className="text-md-right">
                      <span className="badge badge-secondary badge badge-secondary-primary">
                        {issued}
                      </span>
                    </div>
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

export default Awards;
