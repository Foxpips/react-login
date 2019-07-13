import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.isLoggedIn ? (
          <div>
            <h1>Profile</h1>
            <div>Name: {this.props.user.username}</div>
            <div>email: {this.props.user.email}</div>
            <div>password: {this.props.user.password.charAt(0) + "******"}</div>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.login.user }),
  null
)(Profile);
