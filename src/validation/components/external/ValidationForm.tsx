import React from "react";

export interface IValidationForm {
  onSubmit: (formFields: {}) => void;
}

export class ValidationForm extends React.Component<IValidationForm> {
  private submitForm = (e: any) => {
    e.preventDefault();

    const formFields: any = {};
    Object.keys(e.target.elements).forEach(x => {
      console.log(e.target.elements[x].name, e.target.elements[x].value);
      formFields[e.target.elements[x].name] = e.target.elements[x].value;
    });

    this.props.onSubmit(formFields);
  };

  public render() {
    return <form onSubmit={this.submitForm}>{this.props.children}</form>;
  }
}
