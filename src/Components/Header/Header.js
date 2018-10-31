import React from "react";
import { signOutUser } from "../../Actions/user-actions";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";

export const Header = (props, signOutUser) => {
  return (
    <div className="header">
      <span>
        {props.user ? (
          <NavLink to="/">
            <i
              onClick={() => props.signOutUser(props.user)}
              className="fas fa-sign-out-alt"
            />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <i className="fas fa-sign-in-alt" />
          </NavLink>
        )}
      </span>
      <span className="app-title">
        <span className="sparkle">MovieTracker</span>
      </span>
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  signOutUser: user => dispatch(signOutUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
