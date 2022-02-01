import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from './components/Layout';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
