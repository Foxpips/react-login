import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBNavLink
} from "mdbreact";
import { connect } from "react-redux";
import { register } from "../reducers/login.reducer";
import {
  isFormValid,
  validateField,
  validateRequiredFields
} from "./../validation/register.validation";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      formErrors: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let formErrors = this.state.formErrors;

    validateRequiredFields(this.state, formErrors);
    this.setState({ formErrors }, () => {
      const { username, password, email, formErrors } = this.state;
      if (isFormValid(formErrors)) {
        this.props.register({ username, password, email, isLoggedIn: true });
        this.props.history.push("/");
      }
    });
  };

  handleBlur = event => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    this.setState({
      formErrors: validateField(formErrors, name, value),
      [name]: value
    });
  };

  handleChange = event => {
    if (event.target.keyCode === 13) return;
    let formErrors = this.state.formErrors;
    formErrors[event.target.name] = "";
    this.setState({ formErrors }, () => console.log(this.state));
  };

  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  render() {
    const { formErrors } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress}>
              <p className="h5 text-center mb-4">Register</p>
              <div className="white-text">
                <MDBInput
                  label="Name"
                  group
                  type="text"
                  name="username"
                  placeholder="Name"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  className={
                    formErrors.username.length > 0 && "validation-error"
                  }
                />
                <span className="red-text">{formErrors.username}</span>

                <MDBInput
                  label="Your email"
                  group
                  name="email"
                  type="email"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  className={formErrors.email.length > 0 && "validation-error"}
                />
                <span className="red-text">{formErrors.email}</span>

                <MDBInput
                  label="Your password"
                  group
                  name="password"
                  type="password"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  className={
                    formErrors.password.length > 0 && "validation-error"
                  }
                />
                <span className="red-text">{formErrors.password}</span>
              </div>
              <div className="text-center">
                <MDBBtn color="primary" type="submit">
                  Register
                </MDBBtn>
                <div>
                  <br />
                  <small> Already a member?</small>
                  <MDBNavLink to="/login"> Login</MDBNavLink>
                </div>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3" />
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default connect(
  null,
  { register }
)(Register);
