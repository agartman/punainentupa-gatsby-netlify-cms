import React from 'react';

export default ({ content, className }) => <div className="header">
      <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href=""></a>

        <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
          <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog</a></li>
        </ul>
      </div>
    </div>