import React from 'react';

export default ({ content, className }) => <div className="content ribbon">
  <h2 className="content-head content-head-ribbon is-center">Stay tuned!</h2>
  <form name="newsletter" action="/thanks" className="pure-form align-center" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="newsletter" />
    <div className="pure-g">
      
      <div className="pure-u-1 pure-u-lg-3-5">
        <input className="pure-input-1" type="text" id="email" name="email" placeholder="E-mail for newsletter" />
      </div>
      <div className="pure-u-1 pure-u-lg-2-5">
        <button type="submit" className="pure-button pure-input-1">Subscribe</button>
      </div>
      
    </div>
  </form>
</div>