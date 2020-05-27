import React from 'react';

import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Interests from '../components/Interests';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';
import Repositories from '../components/Repositories';

const IndexPage = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid">
        <About />
        <Skills />
        <Repositories />
        <Experience />
        <Certifications />
        <Interests />
        <Education />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
