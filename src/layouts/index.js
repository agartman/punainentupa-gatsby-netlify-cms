import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'purecss'
import '../css/layouts/marketing.css'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet title="Punainen tupa | web development and design">
    <link href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css" rel="stylesheet" />
    </Helmet>
    <Header />
    <div>{children()}</div>
    <ContactForm />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
