import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/resume.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                keywords
                site_img
                manifestStartUrl
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
                {
                  name: 'twitter:image',
                  content: data.site.siteMetadata.site_img,
                },
                {
                  name: 'og:title',
                  content: data.site.siteMetadata.title,
                },
                {
                  name: 'og:site_name',
                  content: data.site.siteMetadata.title,
                },
                ,
                {
                  name: 'og:type',
                  content: 'website',
                },
                ,
                {
                  name: 'og:description',
                  content: data.site.siteMetadata.description,
                },
                ,
                {
                  name: 'og:image',
                  content: data.site.siteMetadata.site_img,
                },
                ,
                {
                  name: 'og:url',
                  content: data.site.siteMetadata.manifestStartUrl,
                },
                ,
                {
                  name: 'og:image:alt',
                  content: data.site.siteMetadata.site_img,
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className={'main-body'}>{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
