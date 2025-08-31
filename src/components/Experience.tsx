import { Icon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { TiStarburst } from 'react-icons/ti';
import config from '../../config';
import Wrapper from './Wrapper';

function Experience() {
  const { jobs } = config;

  return (
    <Wrapper id="experience" bg="#fff">
      <Stack spacing={0} align={'center'} pt={20}>
        <Icon
          color="#F49717"
          fontSize="64"
          _groupHover={{
            color: 'white',
          }}
          as={TiStarburst}
        />{' '}
        <Heading>Experience</Heading>
      </Stack>

      <Box>
        {jobs.map((job) => {
          const {
            logo,
            url,
            company,
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
                  <Link href={url}>
                    <VStack spacing={2} align="center">
                      <Image width="150px" src={logo} alt={`${company} logo`} />
                      <Text fontSize="lg" fontWeight="semibold" pt={2}>
                        {company}
                      </Text>
                    </VStack>
                  </Link>
                </Center>
              </GridItem>

              <GridItem>
                <Box>
                  <Heading size="md" color="#F49717">
                    {occupation}
                  </Heading>
                  <Text>
                    {startDate.format('YYYY-MMMM')} :{' '}
                    {present ? 'Present' : endDate.format('YYYY-MMMM')}
                    <Text>
                      {endDate?.diff(startDate, 'years') > 0 && (
                        <> {endDate.diff(startDate, 'years')} years </>
                      )}
                      {endDate.diff(startDate, 'months') % 12} months
                    </Text>
                  </Text>
                </Box>

                <Box pt={5}>
                  <Heading size="sm"> Projects</Heading>
                  <List>
                    {projects.map(
                      (project: {
                        url: string | undefined;
                        name:
                        | string
                        | number
                        | boolean
                        | {}
                        | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                        | React.ReactNodeArray
                        | React.ReactPortal
                        | null
                        | undefined;
                      }) => {
                        return (
                          <ListItem margin={1} key={Math.random()}>
                            <ListIcon as={MdCheckCircle} color="green.500" />
                            <Link href={project.url}>
                              <i className="fa fa-globe" aria-hidden="true"></i>
                              &nbsp;
                              {project.name}
                            </Link>
                          </ListItem>
                        );
                      }
                    )}
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
