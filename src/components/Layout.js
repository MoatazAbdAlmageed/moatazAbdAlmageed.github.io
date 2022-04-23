import { Box } from '@chakra-ui/react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Helmet from 'react-helmet';

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
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={
                // eslint-disable-next-line no-sparse-arrays
                [
                  {
                    name: 'description',
                    content: data.site.siteMetadata.description,
                  },
                  {
                    name: 'keywords',
                    content: data.site.siteMetadata.keywords,
                  },
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
                ]
              }
            >
              <html lang="en" />
              <meta
                name="google-site-verification"
                content="2o5ux7SuhqzyW9y9mjWagy7qW-4-a9eFayeKVW2tUg8"
              />
                   <script src="https://app.sendstrap.com/scripts/js/social_button.js?id=2416&key=x5EdqfpvyKIFrdgLQAIDuarBMxw0zIhEKDdp3Iln"></script>
              <script
                src="//code.tidio.co/hu1y1yihc632mh3wnzjitnrvou1gkrhq.js"
                async
              ></script>
  <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="a2a_button_facebook"></a>
                <a className="a2a_button_twitter"></a>
                <a className="a2a_button_email"></a>
                <a className="a2a_button_linkedin"></a>
                <a className="a2a_button_facebook_messenger"></a>
              </div>
              <script
                async
                src="https://static.addtoany.com/menu/page.js"
              ></script>
            </Helmet>
            <Box>{children}</Box>
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
