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
// TODO:add sendstrap
// const sendstrap = require('https://app.sendstrap.com/scripts/js/social_button.js?id=2505&key=eTpoTpDQz5fRdasrE9ZkEAXsNJqWNkrqPISZ1wLB');
// console.log('\n'.repeat(5));
// console.log('************ sendstrap **************');
// console.log(sendstrap);
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
