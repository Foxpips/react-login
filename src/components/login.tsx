import React, { Component } from "react";

import ValidationTypes from "../validation/helpers/validation.types";
import { ValidationForm } from "../validation/components/external/ValidationForm";
import { _ValidationInput as ValidationInput } from "../validation/components/internal/ValidationInput";

class FormPage extends Component<any, any> {
  public render() {
    return (
      <ValidationForm
        onSubmit={() => {
          console.log("submitting!");
        }}
      >
        <>
          <div>
            <ValidationInput
              value=""
              // required
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
              value=""
              // required
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
        </>
        <button type="submit">Save</button>
      </ValidationForm>
    );
  }
}

export default FormPage;
