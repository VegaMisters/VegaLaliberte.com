import React from 'react';
import './MenuButton.css';

function MenuButton({ title, imageUrl }) {
  return (
    <div className="card-container">
      <div 
        className="card-bg" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-line"></div>
      </div>
    </div>
  );
}

export default MenuButton;