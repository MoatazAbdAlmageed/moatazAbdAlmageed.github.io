import React from 'react';
import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid">
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
