import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { setName } from "../reducers/login.reducer";

const Register = props => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Register</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                group
                type="text"
                required
                validate
                error="wrong"
                success="right"
                onBlur={event => props.setName(event.target.value)}
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput label="Your password" group type="password" validate />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default connect(
  null,
  { setName }
)(Register);
