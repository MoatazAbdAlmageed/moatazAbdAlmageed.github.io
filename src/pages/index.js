import React from 'react';
import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
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

      <About />
      <Experience />
      <TestimonialContent />
      <Projects />
      <Awards />
      <Contact />

      <Footer />
    </Layout>
  );
};

export default IndexPage;
