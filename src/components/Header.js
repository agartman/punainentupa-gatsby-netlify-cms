import React from 'react';
import Link from "gatsby-link"

export default ({ content, className }) => <div className="header">
  <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
    <a className="pure-menu-heading" href=""></a>

    <ul className="pure-menu-list">
      <li className="pure-menu-item pure-menu-selected">
        <Link className="pure-menu-link" to="/">Home</Link>
      </li>
      <li className="pure-menu-item">        <Link className="pure-menu-link" to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
</div>