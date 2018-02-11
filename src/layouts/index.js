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
