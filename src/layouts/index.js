import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'purecss'
import '../css/layouts/marketing.css'
import '../css/layouts/grids-responsive-min.css'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet title="Punainen tupa | web development and design">
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title"
        content="Punainen tupa solutions Oy - Full stack web developer Atte Gartman" />
      <meta property="og:description" content="Atte is a full stack developer in southern Finland area. Available for freelance work. Get in touch!" />
      <meta property="og:image" content="https://punainentupa.fi/img/ogimage.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="997" />
    </Helmet>
    <div>{children()}</div>
    <ContactForm />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
