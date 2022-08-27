import About from '../components/About';
import { Animate } from 'react-simple-animate';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import React from 'react';
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
        <About />
        <Projects />
        <TestimonialContent />
        <Experience />
        <Awards />
        <Contact />
        <Footer />
      </Animate>
    </Layout>
  );
};

export default IndexPage;
