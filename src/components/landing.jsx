import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView
} from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login";
import Notfound from "../components/error";
import Register from "../components/register";
import Home from "../components/home";
import { connect } from "react-redux";
import "../App.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <Router>
        <div>
          <header>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Welcome, {this.props.userName}</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/register">Register</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

            <MDBView
              src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg"
              className="Small-view"
            >
              <MDBMask
                overlay="black-light"
                className="flex-center flex-column text-white text-center"
              />
            </MDBView>
          </header>

          <main>
            <MDBContainer className="text-center my-5 ">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={Notfound} />
              </Switch>
            </MDBContainer>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ userName: state.login.user.name }),
  null
)(LandingPage);
