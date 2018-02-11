import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import LandingPage from '../components/LandingPage'
import Helmet from 'react-helmet';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {

    return (
      <section className="section">
        <Helmet title="Punainen tupa | web development and design">
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:title"
            content="Punainen Tupa Solutions Oy - Full stack web developer Atte Gartman" />
          <meta property="og:description" content="Atte is a full stack developer in southern Finland area. Available for freelance work. Get in touch!" />
          <meta property="og:image" content="https://punainentupa.fi/img/ogimage.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="997" />
        </Helmet>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <LandingPage />
      </section>
    );
  }
}
