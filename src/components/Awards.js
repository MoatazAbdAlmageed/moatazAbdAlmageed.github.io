import { Box, Center, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

import { GrCertificate } from 'react-icons/gr';
import { Link } from 'gatsby';
import config from '../../config';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <Flex id="awards" direction="column" p={{ base: 5, md: 20 }}>
        <Box>
          <Flex direction="column">
            <Center>
              <Heading>
                {' '}
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
            </Center>
            <Text align="center">
              All my life I have been driven by my strong belief that education
              is important.
              <br /> I try to learn something new every single day.
              <br /> You can check more here
              <Link
                to="https://www.linkedin.com/in/moatazabdelmageed/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-globe" aria-hidden="true"></i>
                &nbsp; @linkedin
              </Link>
            </Text>
          </Flex>
        </Box>

        <Box>
          {certifications.map((certification) => {
            const { place, url, title, issued, description } = certification;
            return (
              <Flex
                key={title}
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}
                overflow="hidden"
                m={2}
                p={10}
                _hover={{ bg: '#F7FAFC' }}
              >
                <Link to={url} target="_blank" rel="noopener noreferrer">
                  <Box>
                    <Text color="orange">
                      <b>{title} </b> @{place}
                    </Text>
                    <Text>{description}</Text>
                    <Text>{issued}</Text>
                  </Box>
                </Link>
              </Flex>
            );
          })}
        </Box>
      </Flex>
    );
  }
}

export default Awards;
