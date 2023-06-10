import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col">St Judes Hospital </div>
        <div className="col"> | 10 - 17 </div>
        <div className="col">20 Rooms</div>
      </div>
      <div className="row">
        <div className="col">Fourth part</div>
        <div className="col">Fifth part</div>
        <div className="col">Sixth part</div>
      </div>
    </div>
  );
};

export default Card;
