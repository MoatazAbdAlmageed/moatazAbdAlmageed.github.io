import { Heading, Icon, Stack } from '@chakra-ui/react';
import React, { Component } from 'react';
import { GrCertificate } from 'react-icons/gr';
import config from '../../config';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <Stack
        className="resume-section p-3  d-flex align-items-center"
        id="awards"
        mb={10}
        mt={10}
      >
        <div className="w-100">
          <Heading as="h2" isTruncated pt={4} pb={4}>
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={GrCertificate}
            />{' '}
            Awards &amp; Certifications
          </Heading>
          <p>
            All my life I have been driven by my strong belief that education is
            important. I try to learn something new every single day.
          </p>
          <ul className="fa-ul mb-0">
            {certifications.map((certification) => {
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
      </Stack>
    );
  }
}

export default Awards;
