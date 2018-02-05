import React from 'react';

export default ({ content, className }) => <div className="content">
  <h2 className="content-head is-center">Let's talk!</h2>

  <div className="pure-g">
    <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
      <form name="contact" className="pure-form pure-form-stacked" data-netlify="true">
        <fieldset>

          <label for="name">Your Name</label>
          <input id="name" type="text" name="name" placeholder="Your Name" />


          <label for="email">Your Email</label>
          <input id="email" type="email" name="email" placeholder="Your Email" />

          <label for="message">Your message</label>
          <textarea id="message" className="pure-input-1" name="message" type="text" placeholder="Your message" />

          <button type="submit" className="pure-button">Send</button>
        </fieldset>
      </form>
    </div>
  </div>

</div>