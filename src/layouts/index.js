import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'purecss'
import '../css/layouts/marketing.css'
import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet title="Punainen tupa | web development and design" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
