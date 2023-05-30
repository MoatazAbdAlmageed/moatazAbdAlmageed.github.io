import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/icons';
import { Link } from 'gatsby';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';
import Wrapper from './Wrapper';

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
            logo,
            url,
            occupation,
            description,
            present,
            responsibilities,
            technologies,
            projects,
            startDate,
            endDate,
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
                md: 'repeat(4, 1fr)',
                sm: 'repeat(1, 1fr)',
              }}
              gap={2}
            >
              <GridItem>
                <Center>
                  <Link to={url}>
                    <Image width="150px" src={logo} />
                  </Link>
                </Center>
              </GridItem>
              <GridItem>
                <Box>
                  <Heading size="md" color="orange">
                    {occupation}
                  </Heading>
                  <Text>
                    {startDate.format('YYYY-MMMM')} :{' '}
                    {present ? 'Present' : endDate.format('YYYY-MMMM')}
                    <Text>
                      {endDate.diff(startDate, 'years') > 0 && (
                        <> {endDate.diff(startDate, 'years')} years </>
                      )}
                      {endDate.diff(startDate, 'months') % 12} months
                    </Text>
                  </Text>
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
    </Wrapper>
  );
}

export default Experience;
