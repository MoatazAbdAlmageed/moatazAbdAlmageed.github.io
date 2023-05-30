import {
  Box,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';

import Divider from './Divider';
import { Icon } from '@chakra-ui/icons';
import { Link } from 'gatsby';
import { MdCheckCircle } from 'react-icons/md';
import React from 'react';
import { TiStarburst } from 'react-icons/ti';
import Wrapper from './Wrapper';
import config from '../../config';

function Experience() {
  const { jobs } = config;

  return (
    <Wrapper id="experience">
      <Box spacing={0} align={'center'}>
        <Heading pt={20}>
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

      <Box>
        {jobs.map((job) => {
          const {
            company,
            url,
            occupation,
            description,
            period,
            responsibilities,
            technologies,
            projects,
          } = job;
          return (
            <Grid
              key={url}
              overflow="hidden"
              _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transition: '0.5s',
                bg: 'gray.100',
              }}
              p={5}
              templateColumns={{
                base: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
              gap={4}
            >
              <GridItem>
                <Box>
                  <Heading size="md" color="orange">
                    {occupation}
                  </Heading>
                  <Link to={url}> @{company} </Link>
                  <h4> {period}</h4>
                </Box>

                <Box pt={5}>
                  <Heading size="sm"> Projects</Heading>
                  <List>
                    {projects.map((project) => {
                      return (
                        <ListItem margin={1} key={Math.random()}>
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
              </GridItem>

              <GridItem colSpan={2}>
                <Box pt={2}>
                  <Heading size="sm">Responsibilities</Heading>
                  <List>
                    {responsibilities.map((responsibility) => {
                      return (
                        <ListItem margin={1} key={Math.random()}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {responsibility}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <Box pt={2}>
                  <Heading size="sm">Technologies</Heading>
                  <List display="flex">
                    {technologies.map((technology) => {
                      return (
                        <ListItem margin={1} key={Math.random()}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {technology}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>

                <p>{description}</p>
              </GridItem>
            </Grid>
          );
        })}
      </Box>
      <Divider />
    </Wrapper>
  );
}

export default Experience;
