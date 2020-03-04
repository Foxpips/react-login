import React, { Component } from "react";
import { ValidationForm } from "../validation/components/external/ValidationForm";
import { ValidationInput } from "../validation/components/internal/ValidationInput";
import ValidationTypes from "../validation/helpers/validation.types";
import {
  setError,
  fireValidation
} from "../validation/helpers/validation.helper";
import { IValidationState } from "../validation/validation.interfaces";

class FormPage extends Component<any, IValidationState> {
  constructor(props: any) {
    super(props);

    this.state = {
      fireValidation: false,
      hasError: false
    };
  }

  public render() {
    return (
      <ValidationForm
        onSubmit={(formFields: any) => {
          // console.log("form has an error: ", this.state.hasError);
          fireValidation(this);
          if (!this.state.hasError && this.state.fireValidation) {
            console.log("SUBMITTING: ", formFields);
          }
        }}
      >
        <div>
          <ValidationInput
            // required
            fireValidation={this.state.fireValidation}
            setError={(error: any) => setError(this, error)}
            value=""
            placeholder="Email"
            id="Email"
            type="input"
            name="Email"
            datavalidationtypes={[
              ValidationTypes.Required,
              ValidationTypes.Email
            ]}
          />
        </div>
        <div>
          <ValidationInput
            // required
            fireValidation={this.state.fireValidation}
            setError={(error: any) => setError(this, error)}
            value=""
            placeholder="Password"
            id="Password"
            type="input"
            name="Password"
            datavalidationtypes={[
              ValidationTypes.Required,
              ValidationTypes.Password
            ]}
          />
        </div>

        <button type="submit">Save</button>
      </ValidationForm>
    );
  }
}

export default FormPage;
