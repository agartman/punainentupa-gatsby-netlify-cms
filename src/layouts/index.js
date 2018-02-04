import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
//import 'purecss'
import '../css/layouts/marketing.css'
const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet title="Punainen tupa | web development and design" />
    <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href=""></a>

        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog</a></li>
        </ul>
      </div>
    </div>

<div className="splash-container">
    <div className="splash">
        <h1 className="splash-head">Hi! I'm Atte
        <br/>
        <br/>
        Let's get to work!</h1>
        <p className="splash-subhead">
            Full stack developer at your service
        </p>
    </div>
</div>

<div className="content-wrapper">
    <div className="content ribbon">
    <h2 className="content-head content-head-ribbon is-center">Stay tuned via an occasional newsletter
</h2>

    <form className="pure-form  pure-g" name="newsletter" data-netlify="true">
    <div className="pure-u-3-5">
        <input className="pure-input-1" type="text" name="email" placeholder="E-mail"/>
    </div>
    <div className="pure-u-1-4">
      <button type="submit" className="pure-button pure-input-1">Subscribe</button>
    </div>

            </form>

    </div>
    <div className="content">
        <h2 className="content-head is-center">Tools I like to work with</h2>

        <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                <h3 className="content-subhead">
                    <i className="fa fa-rocket"></i>
                    Get Started Quickly
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-mobile"></i>
                    Responsive Layouts
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-th-large"></i>
                    Modular
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-check-square-o"></i>
                    Plays Nice
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
        </div>
    </div>

    <div className="ribbon l-box-lrg pure-g">
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

            <h2 className="content-head content-head-ribbon">Recent posts.</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor.
            </p>
        </div>
    </div>

    <div className="content">
        <h2 className="content-head is-center">Let's talk!</h2>

        <div className="pure-g">
            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                <form name="contact" className="pure-form pure-form-stacked" data-netlify="true">
                    <fieldset>

                        <label for="name">Your Name</label>
                        <input id="name" type="text" name="name" placeholder="Your Name"/>


                        <label for="email">Your Email</label>
                        <input id="email" type="email" name="email" placeholder="Your Email"/>

                        <label for="message">Your message</label>
                        <textarea id="message"  className="pure-input-1" name="message" type="text" placeholder="Your message"/>

                        <button type="submit" className="pure-button">Send</button>
                    </fieldset>
                </form>
            </div>

            <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
                <h4>Contact Us</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>

                <h4>More Information</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>

    </div>

</div>

    
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
