import React from "react";
import { _ValidationInput } from "../internal/ValidationInput";

export interface IValidationForm {
  onSubmit: () => void;
}

export interface IValidationState {
  fireValidation: boolean;
  hasError: boolean;
}

export class ValidationForm extends React.Component<
  IValidationForm,
  IValidationState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      fireValidation: false,
      hasError: true
    };
  }

  private setHasError = (hasError: boolean) => {
    this.setState({
      hasError
    });
  };

  private fireValidation = () => {
    this.setState({
      fireValidation: true
    });
  };

  private submitForm = (e: any) => {
    e.preventDefault();

    Object.keys(e.target.elements).map(x =>
      console.log(e.target.elements[x].name, e.target.elements[x].value)
    );

    this.fireValidation();

    if (!this.state.hasError) {
      this.props.onSubmit();
    }
  };

  public render() {
    return (
      <form onSubmit={this.submitForm}>
        <Kids
          setHasError={this.setHasError}
          fireValidation={this.state.fireValidation}
          children={this.props.children}
        />
      </form>
    );
  }
}

const Kids = (props: any) => {
  return (
    <>
      {React.Children.map(props.children, child => {
        console.log("STUFFF", child.props.children);
        console.log(typeof _ValidationInput);
        if (
          child.props.children.props &&
          child.props.children.props.datavalidationtypes
        ) {
          return React.createElement(_ValidationInput, {
            ...child.props.children.props,
            fireValidation: props.fireValidation,
            setHasError: props.setHasError
          });
        }
        return React.cloneElement(child);
      })}
    </>
  );
};
