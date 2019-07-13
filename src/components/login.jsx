import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBNavLink
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3" />
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="white-text">
              <MDBInput
                label="Type your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>Login</MDBBtn>
            </div>
            <div>
              <MDBNavLink to="/register">Register</MDBNavLink>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3" />
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
