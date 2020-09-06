import React from 'react';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Interests from '../components/Interests';
import Layout from '../components/Layout';
import Repositories from '../components/Repositories';
import Sidebar from '../components/Sidebar';

const IndexPage = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid">
        <About />
        <Experience />
        <Repositories />
        <Certifications />
        <Interests />
        <Education />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
