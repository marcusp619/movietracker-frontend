import React from "react";
import { signOutUser } from "../../Actions/user-actions";
import { connect } from "react-redux";
import "./Header.css";

const Header = (props, signOutUser) => {
  return (
    <div className="header">
      <span>
        {props.user ? (
          <i onClick={props.signOutUser} className="fas fa-sign-out-alt" />
        ) : null}
      </span>
      <span className="app-title">
        <span className="sparkle">MovieTracker</span>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
