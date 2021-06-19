import React from 'react';
import { Link, Box, Badge } from '@chakra-ui/react';

export default function Project({
  project: { title, url, type, icon, year, description },
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Link isExternal textDecor="underline" color="purple.500" href={url}>
            <Box fontWeight="semibold" as="h2" lineHeight="tight" isTruncated>
              {title}
            </Box>
          </Link>

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
      </Box>
    </Box>
  );
}
