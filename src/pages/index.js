import { Box } from '@chakra-ui/react';
import React from 'react';
import { Animate } from 'react-simple-animate';
import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import TestimonialContent from '../components/Testimonials';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Animate
        play={true}
        end={{ opacity: 1, transform: 'translateY(0)' }}
        start={{ opacity: 1, transform: 'translateY(-100px)' }}
      >
        <Box
          padding={{ md: '20', sm: '5' }}
          bgGradient="linear(to-r, gray.100, gray.300)"
        >
          <About />
          <Experience />
          <Projects />
          <TestimonialContent />
          <Awards />
          <Contact />
        </Box>
        <Footer />
        <Divider />
      </Animate>
    </Layout>
  );
};

export default IndexPage;
