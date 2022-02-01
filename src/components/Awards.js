import { Box, Grid, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import { GrCertificate } from 'react-icons/gr';
import config from '../../config';
import Wrapper from './Wrapper';

class Awards extends Component {
  render() {
    const { certifications } = config;
    return (
      <Wrapper id="awards">
        <Stack spacing={0} align={'center'}>
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
          <Text align="center">
            All my life I have been driven by my strong belief that education is
            important.
            <br /> I try to learn something new every single day.
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
              <Box
                key={title}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                m={2}
                p={10}
                _hover={{ bg: 'gray.100' }}
              >
                <Link to={url} target="_blank" rel="noopener noreferrer">
                  <Text color="orange">
                    <b>{title} </b> @{place}
                  </Text>

                  <Text>{description}</Text>
                  <Text>{issued}</Text>
                </Link>
              </Box>
            );
          })}
        </Grid>
      </Wrapper>
    );
  }
}

export default Awards;
