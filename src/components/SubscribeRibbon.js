import React from 'react';

export default ({ content, className }) => <div className="content ribbon">
  <h2 className="content-head content-head-ribbon is-center">Stay tuned via an occasional newsletter
</h2>
  <form className="pure-form pure-g" name="subscribenpm" data-netlify="true">
    <div className="pure-u-3-5">
      <input className="pure-input-1" type="text" name="email" placeholder="E-mail" />
    </div>
    <div className="pure-u-1-4">
      <button type="submit" className="pure-button pure-input-1">Subscribe</button>
    </div>
  </form>
</div>