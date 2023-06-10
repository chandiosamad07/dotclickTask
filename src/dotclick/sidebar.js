// Sidebar.js

import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
       
      <ul>
        <li>LODGN</li>
        <li className="green">Current Request</li>
        <hr />
        <li>Ongoing stays</li>
        <hr />
        <li>Privouse stays</li>
        <hr />
        <li>Reports</li>
        <hr />
      </ul>
      <button className="sidebar-button">Log-out</button>
      <br/>
      <text>
        Help-Desk
        <br/>
        786-8749988
      </text>
    </div>
  );
};

export default Sidebar;
