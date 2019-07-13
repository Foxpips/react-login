import React from "react";
import { connect } from "react-redux";
import { MDBNavLink } from "mdbreact";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.userName}</h1>
        <div>
          <MDBNavLink to="/register">Register</MDBNavLink> or
          <MDBNavLink to="/login">Login</MDBNavLink>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ userName: state.login.user.name }),
  null
)(Home);
