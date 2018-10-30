import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <span>
        <i className="fas fa-sign-out-alt" />
      </span>
      <span className="app-title">
        <span className="sparkle">MovieTracker</span>
      </span>
    </div>

    //signOutUser action creator function must be called
    //need onClick function that dispatches the signout action object
    //action object applied by users reducer
    //reducer updates global state object with blank string value for the user key
  );
};

export default Header;
