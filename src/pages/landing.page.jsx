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
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../components/login";
import Logout from "../components/logout";
import Notfound from "../components/error";
import Register from "../components/register";
import Home from "../components/home";
import Profile from "../components/profile";
import { checkIfLoggedIn } from "../reducers/login.reducer";
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

  componentWillMount() {
    this.props.checkIfLoggedIn();
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  isActive = menuItem => {
    return this.props.location.pathname.split("/")[1] === menuItem;
  };

  render() {
    return (
      <div>
        <header>
          <MDBNavbar color="indigo" dark expand="md" fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Welcome, {this.props.user.username}</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active={this.isActive("")}>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>

                {!this.props.user.isLoggedIn ? (
                  <React.Fragment>
                    <MDBNavItem active={this.isActive("register")}>
                      <MDBNavLink to="/register">Register</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.isActive("login")}>
                      <MDBNavLink to="/login">Login</MDBNavLink>
                    </MDBNavItem>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <MDBNavItem active={this.isActive("profile")}>
                      <MDBNavLink to="/profile">Profile </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.isActive("logout")}>
                      <MDBNavLink to="/logout">logout </MDBNavLink>
                    </MDBNavItem>
                  </React.Fragment>
                )}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <MDBView
            src={`${
              this.props.user.isLoggedIn
                ? "https://mdbootstrap.com/img/Photos/Others/img%20(30).jpg"
                : "https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg"
            }`}
            className="Small-view"
          >
            <MDBMask
              overlay="black-light"
              className="flex-center flex-column text-white text-center"
            >
              <br />
              <h2>Powering Ingenuity</h2>
              <h5>Mi9Retail</h5>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5 ">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route component={Notfound} />
            </Switch>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.login.user }),
  { checkIfLoggedIn }
)(withRouter(LandingPage));
