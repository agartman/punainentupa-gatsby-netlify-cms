import React from 'react';

export default ({ content, className }) => <div className="content contact-form">
  <h2 className="content-head is-center">Let's talk!</h2>
  <h4 className="content-head is-center">Call me on +358 50 371 3477</h4>

  <h4 className="content-head is-center">Or send a message</h4>

  <form name="contact" className="pure-form pure-form-stacked float-center" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-2">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" name="name" placeholder="Your Name" />
      </div><div className="pure-u-1 pure-u-md-1-2">

        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" name="email" placeholder="Your Email" />
      </div><div className="pure-u-1 pure-u-md-2-2 pure-u-lg-4-4">
        <label htmlFor="message">Your message</label>
        <textarea id="message" className="pure-input-1" name="message" type="text" placeholder="Your message" />
      </div><div className="pure-u-1">
        <button type="submit" className="pure-button pure-input-1">Send</button>
      </div>
    </div>
  </form>

</div>