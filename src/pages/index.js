import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Volunteering from '../components/Volunteering';
import Interests from '../components/Interests';
import Education from '../components/Education';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid">
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Interests />
        <Volunteering />
        <Education />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
