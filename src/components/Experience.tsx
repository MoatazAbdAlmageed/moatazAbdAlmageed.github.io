import { Icon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react';
import React, { Component } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';
import Wrapper from './Wrapper';

class Experience extends Component {
  render() {
    const { jobs } = config;

    return (
      <Wrapper id="experience" bg="#F7FAFC">
        <Stack spacing={0} align={'center'}>
          <Heading>
            {' '}
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={TiStarburst}
            />{' '}
            Experience
          </Heading>
        </Stack>

        <Grid
          gap={2}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
        >
          {jobs.map((job) => {
            const {
              company,
              url,
              occupation,
              description,
              period,
              responsibilities,
              projects,
            } = job;
            return (
              <Stack
                key={url}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ bg: '#F7FAFC' }}
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}
                p={10}
              >
                <Box>
                  <Box>
                    <Heading size="md" color="orange">
                      {occupation}
                    </Heading>
                    <Link to={url}> @{company} </Link>
                    <h4> {period}</h4>
                  </Box>

                  <Box pt={5}>
                    <Heading size="sm">Responsibilities</Heading>
                    <List>
                      {responsibilities.map((responsibility) => {
                        return (
                          <ListItem key={Math.random()}>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            {responsibility}
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>

                  <Box pt={5}>
                    <Heading size="sm"> Projects</Heading>
                    <List>
                      {projects.map((project) => {
                        return (
                          <ListItem key={Math.random()}>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-globe" aria-hidden="true"></i>
                              &nbsp;
                              {project.name}
                            </a>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>

                  <p>{description}</p>
                </Box>
              </Stack>
            );
          })}
        </Grid>
      </Wrapper>
    );
  }
}

export default Experience;
