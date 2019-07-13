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
import { setName } from "../reducers/login.reducer";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        email: "",
        password: ""
      }
    };
  }

  formValid = formErrors => {
    return !Object.values(formErrors).some(val => val.length > 0);
  };

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleSubmit = event => {
    event.preventDefault();
    let formErrors = this.state.formErrors;
    Object.keys(this.state).forEach(
      val =>
        this.state[val].length <= 0 &&
        (formErrors[val] = "* This field is required")
    );

    this.setState({ formErrors }, () => {
      const { firstName, password, email, formErrors } = this.state;
      if (this.formValid(formErrors)) {
        console.log(`form is valid
        FirstName:${firstName}
        email:${email}
        password:${password}     
        `);
      } else {
        console.error("Form is invalid!");
      }
    });
  };

  handleBlur = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = this.validateEmail(value)
          ? ""
          : "please enter a valid email address";
        break;
      case "password":
        formErrors.password =
          value.length > 6 && value.length < 12
            ? ""
            : "password must be between 6-12 characters";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleChange = event => {
    let formErrors = this.state.formErrors;
    formErrors[event.target.name] = "";
    this.setState({ formErrors }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Register</p>
              <div className="white-text">
                <MDBInput
                  label="Name"
                  group
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  //onBlur={event => this.props.setName(event.target.value)}
                  className={
                    formErrors.firstName.length > 0 && "validation-error"
                  }
                />
                <span className="red-text">{formErrors.firstName}</span>

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
  { setName }
)(Register);
