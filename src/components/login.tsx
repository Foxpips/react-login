import React, { Component } from "react";
import { ValidationForm } from "../validation/ValidationForm";
import { ValidationInput } from "../validation/Input.validation";
import ValidationTypes from "../validation/validation.types";

class FormPage extends Component<any, any> {
  public componentDidUpdate() {}

  constructor(props: any) {
    super(props);

    this.state = {
      fireValidation: false,
      hasError: false
    };
  }

  public setHasError = (hasError: boolean) => {
    this.setState({
      hasError
    });
  };

  public render() {
    return (
      <ValidationForm
        onSubmit={() => {
          console.log("hasError", this.state.hasError);
          this.setState({ fireValidation: true });
        }}
      >
        <ValidationInput
          fireValidation={this.state.fireValidation}
          setHasError={this.setHasError}
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
        <ValidationInput
          fireValidation={this.state.fireValidation}
          setHasError={this.setHasError}
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

        <button type="submit">Save</button>
      </ValidationForm>
    );
  }
}

export default FormPage;
