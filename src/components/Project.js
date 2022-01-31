import { Badge, Box, Heading, Link, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

Project.propTypes = {
  project: PropTypes.node.isRequired,
};
// eslint-disable-next-line react/prop-types
export default function Project({ project }) {
  // eslint-disable-next-line react/prop-types
  const { title, url, tools, year, description } = project;
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ bg: 'green.300' }}
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" as="p" lineHeight="tight" isTruncated>
            <Heading size="md" isTruncated pt={4} pb={4}>
              {title}
            </Heading>
          </Box>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {year}
          </Box>
        </Box>

        <p>{description}</p>
        <p>
          <Link isExternal textDecor="underline" color="purple.500" href={url}>
            <Box fontWeight="semibold" as="p" lineHeight="tight" isTruncated>
              {url}
            </Box>
          </Link>
        </p>

        <Stack direction="row" mt={5}>
          {tools?.map((tool) => (
            <Badge key={tool.key} variant="solid" colorScheme="green">
              {tool}
            </Badge>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
