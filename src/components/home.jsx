import React from "react";
import { connect } from "react-redux";
import { MDBNavLink } from "mdbreact";

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.user.username}</h1>
        {this.props.user.isLoggedIn ? (
          <div>How are you today?</div>
        ) : (
          <div>
            <MDBNavLink to="/register">Register</MDBNavLink> or
            <MDBNavLink to="/login">Login</MDBNavLink>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.login.user }),
  null
)(Home);
