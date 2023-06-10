import React from 'react';
import './styles.css';

const SidebarCardLayout = () => {
  return (
    <div className="container">
        
      <div className="sidebar">
        {/* Sidebar content */}
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
      <div className="content">
        {/* Card 1 */}
        <div>
        <h1>You have 3 Request</h1>
        </div>
        <div className="card">
          <h3>Card 1</h3>
          <p>Card 1 content goes here.</p>
        </div>
        {/* Card 2 */}
        <div className="card">
          <h3>Card 2</h3>
          <p>Card 2 content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarCardLayout;
