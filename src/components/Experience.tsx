import { Box, Flex, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';

import { Icon } from '@chakra-ui/icons';
import { Link } from 'gatsby';
import { MdCheckCircle } from 'react-icons/md';
import React from 'react';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';

function Experience() {
  const { jobs } = config;

  return (
    <Flex id="experience" direction="column" p={{ base: 5, md: 20 }}>
      <Box spacing={0} align={'center'} p={5}>
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
      </Box>

      <Flex direction="column">
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
            <Box
              key={url}
              overflow="hidden"
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}
              p={10}
              _hover={{ bg: '#F7FAFC' }}
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
                          <Link
                            to={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            &nbsp;
                            {project.name}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <p>{description}</p>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Experience;
