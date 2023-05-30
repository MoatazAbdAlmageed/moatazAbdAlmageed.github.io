import { Grid, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React, { Component } from 'react';

import { GrCertificate } from 'react-icons/gr';
import config from '../../config';
import Wrapper from './Wrapper';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <Wrapper id="awards" bg="#F7FAFC">
        <Stack spacing={0} align={'center'}>
          <Heading pt={20}>
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
          <Text align="center">
            All my life I have been driven by my strong belief that education is
            important.
            <br /> I try to learn something new every single day.
            <br /> You can check more here
            <Link
              href="https://www.linkedin.com/in/moatazabdelmageed/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-globe" aria-hidden="true"></i>
              &nbsp; @linkedin
            </Link>
          </Text>
        </Stack>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(5, 1fr)',
          }}
        >
          {certifications.map((certification) => {
            const { place, url, title, issued, description } = certification;
            return (
              <Stack
                key={title}
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}
                overflow="hidden"
                m={2}
                p={10}
                _hover={{
                  shadow: 'md',
                  transform: 'translateY(-5px)',
                  transition: '0.5s',
                  bg: 'gray.100',
                }}
              >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Text color="orange">
                    <b>{title} </b> @{place}
                  </Text>

                  <Text>{description}</Text>
                  <Text>{issued}</Text>
                </Link>
              </Stack>
            );
          })}
        </Grid>
      </Wrapper>
    );
  }
}

export default Awards;
