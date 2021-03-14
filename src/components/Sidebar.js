import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Box, Heading, Link } from '@chakra-ui/react';
import config from '../../config';
import avatar from '../assets/img/avatar.jpg';
import Scroll from './Scroll';
import ThemeToggle from './toggle-theme';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Projects', href: 'projects' },
        { content: 'Awards', href: 'awards' },
        { content: 'Contact', href: 'contact' },
      ],
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = () => {
    var colors = config.colors;
    let randomElement = colors[Math.floor(Math.random() * colors.length)];
    //todo set in localStorage
    console.log(randomElement);
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
        <a className="navbar-brand  js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">
            {firstName} {lastName}
          </span>

          <ThemeToggle />

          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button className="btn btn-sm btn-secondary" onClick={this.changeColor}>
          <i className="fa fa-paint-brush"></i>
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
                    <a className="nav-link js-scroll-trigger" href={`#${href}`}>
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
