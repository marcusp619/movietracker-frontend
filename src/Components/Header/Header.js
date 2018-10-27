import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <span><i className="fas fa-sign-out-alt"></i></span>
      <span className="app-title">
        <span className="sparkle">MovieTracker</span>
      </span>
    </div>
  )
}

export default Header;