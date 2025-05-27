import {
  Heading
} from '@chakra-ui/react';
import React, { Component } from 'react';
import config from '../../config';
import Wrapper from './Wrapper';

import {
  Box
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/icons';
import { GrCertificate } from 'react-icons/ti';



class Education extends Component {
  render() {
    const { education } = config;

    return (
      <Wrapper id="education" bg="#fff">
        <Box spacing={0} align={'center'}>
              <Icon
                color="#F49717"
                fontSize="64"
                _groupHover={{
                  color: 'white',
                }}
                as={GrCertificate}
              />
          <Heading p={10}>Education</Heading>
          </Box>


        <div className="w-100">

          {education.map((education) => {
            const { place, url, title, period } = education;
            return (
              <div
                key={url}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <h3 className="mb-0">{place}</h3>
                  <div className="subheading mb-3">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="badge badge-secondary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

export default Education;
