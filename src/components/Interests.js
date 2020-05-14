import React, { Component } from 'react';

import config from '../../config';

export class Interests extends Component {
  render() {
    const { interests } = config;

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
              return <li key={Math.random()}>{interest}</li>;
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Interests;
