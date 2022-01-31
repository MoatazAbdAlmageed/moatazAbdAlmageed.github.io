import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import SmallCenteredFooter from './components/Footer';
import Layout from './components/Layout';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
      <SmallCenteredFooter />
    </ChakraProvider>
  );
};
