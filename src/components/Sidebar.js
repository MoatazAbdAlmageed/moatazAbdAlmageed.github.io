import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/img/avatar.jpg';
import config from '../../config';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Skills', href: 'skills' },
        { content: 'Repositories', href: 'repositories' },
        { content: 'Awards', href: 'awards' },
        { content: 'Interests', href: 'interests' },
        { content: 'Education', href: 'education' },
        { content: 'Contact', href: 'contact' },
      ],
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    var colors = [
      { primary: '#DC2167', secondary: '#0F1237' },
      { primary: '#CD2731', secondary: '#96CBBB' },
      { primary: '#E9C121', secondary: '#010101' },
      { primary: '#EEC710', secondary: '#0D1239' },
      { primary: '#1D3D59', secondary: '#FE6F42' },
      { primary: '#DFB891', secondary: '#1D817F' },
      { primary: '#CE9CAA', secondary: '#1769A4' },
      { primary: '#782049', secondary: '#1E2963' },
      { primary: '#7F307F', secondary: '#6781B3' },
      { primary: '#1D3B45', secondary: '#C65F1D' },
      { primary: '#1E1E1E', secondary: '#D5A06B' },
      { primary: '#D5D274', secondary: '#196537' },
      { primary: '#C43C9A', secondary: '#FFE005' },
      { primary: '#D01B3B', secondary: '#4104C6' },
      { primary: '#1FBBB4', secondary: '#1979A1' },
      { primary: '#316072', secondary: '#F67D80' },
      { primary: '#252526', secondary: '#007acc' },
      { primary: '#54BABF', secondary: '#ADDBD9' },
      { primary: '#99BC44', secondary: '#DB2977' },
    ];
    let randomElement = colors[Math.floor(Math.random() * colors.length)];

    document.documentElement.style.setProperty(
      '--primary',
      randomElement.primary
    );

    document.documentElement.style.setProperty(
      '--secondary',
      randomElement.secondary
    );
  };

  render() {
    const { tabs } = this.state;
    const { firstName, lastName } = config;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {firstName} {lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button className="btn btn-sm btn-secondary" onClick={this.changeColor}>
          <i class="fas fa-palette"></i>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
