import React, { Component } from "react";
import { ValidationForm } from "../validation/components/ValidationForm";
import { ValidationInput } from "../validation/components/ValidationInput";
import ValidationTypes from "../validation/helpers/validation.types";

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
        <div>
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
        </div>
        <div>
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
        </div>

        <button type="submit">Save</button>
      </ValidationForm>
    );
  }
}

export default FormPage;
