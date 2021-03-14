import { Box, Link } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <>
      <Box
        as="div"
        m="0 auto"
        // color="white"
        maxWidth="960px"
        p="0 1.0875rem 1.45rem"
      >
        <Box as="footer" marginTop="2rem" fontSize="xl">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link
            isExternal
            textDecor="underline"
            color="purple.500"
            href="https://www.gatsbyjs.com"
          >
            Gatsby
          </Link>
        </Box>
      </Box>
    </>
  );
}
