import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from './components/layout';
import Footer from './components/Footer';

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
      <Footer />
    </ChakraProvider>
  );
};
