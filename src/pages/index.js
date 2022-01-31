import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import TestimonialContent from '../components/Testimonials';
const IndexPage = () => {
  return (
    <Layout>
      <Flex>
        <Box>
          <Sidebar />
        </Box>
        <Box p={5}>
          <About />
          <Experience />
          <Projects />
          <TestimonialContent />
          <Awards />
          <Contact />
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
