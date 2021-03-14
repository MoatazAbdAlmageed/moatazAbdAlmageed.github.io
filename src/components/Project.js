import React from 'react';
import { Link, Box, Badge } from '@chakra-ui/react';

export default function Project({
  project: { title, url, type, icon, year, description },
}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            <Link
              isExternal
              textDecor="underline"
              color="purple.500"
              href={url}
            >
              {title}
            </Link>
          </Badge>
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

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {description}
        </Box>
      </Box>
    </Box>
  );
}
