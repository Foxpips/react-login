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
          console.log("form has an error: ", this.state.hasError);
          console.log("fields: ", formFields);
          fireValidation(this);
        }}
      >
        <div>
          <ValidationInput
            // required
            fireValidation={this.state.fireValidation}
            setError={(error: any) => setError(this, error)}
            value=""
            placeholder="Firstname"
            id="Firstname"
            type="input"
            name="Firstname"
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
            placeholder="Surname"
            id="Surname"
            type="input"
            name="Surname"
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
