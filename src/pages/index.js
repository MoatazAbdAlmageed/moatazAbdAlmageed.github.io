import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Volunteering from '../components/Volunteering';
import Interests from '../components/Interests';
import Education from '../components/Education';

const IndexPage = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid">
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Interests />
        <Volunteering />
        <Education />
      </div>
    </Layout>
  );
};

export default IndexPage;
