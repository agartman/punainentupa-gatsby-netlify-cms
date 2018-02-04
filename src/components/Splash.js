import React from 'react';

export default ({ heading1, heading2, subheader }) => <div className="splash-container">
<div className="splash">
  <h1 className="splash-head">{heading1}
  <br />
    <br />
    {heading2}</h1>
  <p className="splash-subhead">
    {subheader}
  </p>
</div>
</div>