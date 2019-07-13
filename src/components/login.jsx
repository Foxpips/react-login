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
              <MDBBtn color="primary" disabled>
                Login
              </MDBBtn>
            </div>
            <div>
              <br /> <small>Not a member?</small>
              <MDBNavLink to="/register">Register Here</MDBNavLink>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3" />
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
