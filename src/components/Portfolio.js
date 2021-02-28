import React, { Component } from 'react';
import config from '../../config';

class Portfolio extends Component {
  render() {
    const { socialLinks } = config;
    const { url, name, icon } = socialLinks.find(
      ({ name }) => name === 'Behance'
    );
    return (
      <section
        className="resume-section p-3  d-flex justify-content-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">
            <i className="fa fa-keyboard" /> Portfolio
          </h2>
          <p>Check Out My Latest Projects </p>
          <a
            key={url}
            href={url}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa ${icon}`} /> <span>&nbsp;</span> {url}
          </a>
        </div>
      </section>
    );
  }
}

export default Portfolio;
