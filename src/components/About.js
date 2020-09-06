import React, { Component } from 'react';
import config from '../../config';
import avatar from '../assets/img/avatar.jpg';
import SkillsIcons from '../components/SkillsIcons';

class About extends Component {
  render() {
    const {
      firstName,
      lastName,
      position,
      description,
      socialLinks,
      location,
      address,
      phone,
      email,
    } = config;

    return (
      <section
        className="resume-section p-3  d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <p className="lead">Hi!, my name is</p>
          <h1 className="mb-0">
            {firstName}
            <span className="text-primary">{lastName}</span>
          </h1>

          <p className="d-lg-none text-center">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2 avatar"
              alt="avatar"
              src={avatar}
            />
          </p>

          <p className="position">I am a {position}</p>
          <p className="lead">{description}</p>

          <SkillsIcons />

          <div className="social-icons mt-5">
            {socialLinks.map(social => {
              const { icon, url, name } = social;
              return (
                <a
                  key={url}
                  href={url}
                  title={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa ${icon}`} />
                </a>
              );
            })}
          </div>

          <ul className="subheading mt-5">
            <li>
              <i className="fa fa-map-marker" /> &nbsp;{' '}
              <a href={location} target="_blank" rel="noopener noreferrer">
                {' '}
                {address}{' '}
              </a>{' '}
            </li>
            <li>
              <i className="fa fa-mobile"> </i> &nbsp;{' '}
              <a href={`tel:${phone}`}>{phone}</a>{' '}
            </li>
            <li>
              <i className="fa fa-whatsapp" /> &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${phone}`}
              >
                {phone}
              </a>
            </li>
            <li>
              <i className="fa fa-envelope" /> &nbsp;
              <a href={`mailto:${email}`}>{email}</a>
            </li>{' '}
          </ul>
        </div>
      </section>
    );
  }
}

export default About;
