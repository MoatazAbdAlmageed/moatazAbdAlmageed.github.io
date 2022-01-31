import { Heading, Icon, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import { GrCertificate } from 'react-icons/gr';
import config from '../../config';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <Stack id="awards" borderRadius>
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
        <Text>
          All my life I have been driven by my strong belief that education is
          important. I try to learn something new every single day.
        </Text>
        <Text>
          <List>
            {certifications.map((certification) => {
              const { place, url, title, issued, description } = certification;
              return (
                <ListItem key={Math.random()} p={2}>
                  <div>
                    <Text color={'orange'}>
                      <i className="fa-li fa fa-star text-warning" />
                    </Text>
                    <Link to={url} target="_blank" rel="noopener noreferrer">
                      <Text>
                        {' '}
                        <b>{title} </b> @{place}
                      </Text>
                    </Link>{' '}
                    <p>{description}</p>
                  </div>

                  <span className="badge badge-secondary badge badge-secondary-primary">
                    {issued}
                  </span>
                </ListItem>
              );
            })}
          </List>
        </Text>
      </Stack>
    );
  }
}

export default Awards;
