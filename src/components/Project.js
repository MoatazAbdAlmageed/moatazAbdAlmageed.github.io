import React from 'react';
import { Link, Box, Badge, Stack } from '@chakra-ui/react';

export default function Project({
  project: { title, url, tools, icon, year, description },
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Stack direction="row">
          {tools.map(tool => (
            <Badge variant="solid" colorScheme="teal">
              {tool}
            </Badge>
          ))}
        </Stack>

        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" as="h2" lineHeight="tight" isTruncated>
            <heading> {title}</heading>
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
            <Box fontWeight="semibold" as="h2" lineHeight="tight" isTruncated>
              {url}
            </Box>
          </Link>
        </p>
      </Box>
    </Box>
  );
}
