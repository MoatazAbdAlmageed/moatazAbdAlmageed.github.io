import { SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
const IndexPage = () => {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 2 }}>
        <Stack spacing={0}>
          <Sidebar />
        </Stack>
        <Stack p={2}>
          <About />
          <Experience />
          <Projects />
          <Awards />
          <Contact />
        </Stack>
      </SimpleGrid>
    </Layout>
  );
};

export default IndexPage;
