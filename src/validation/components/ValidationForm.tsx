import React from "react";

export interface IValidationForm {
  onSubmit: () => void;
}

export class ValidationForm extends React.Component<IValidationForm> {
  private submitForm = (e: any) => {
    e.preventDefault();

    Object.keys(e.target.elements).map(x =>
      console.log(e.target.elements[x].name, e.target.elements[x].value)
    );

    this.props.onSubmit();
  };

  public render() {
    return <form onSubmit={this.submitForm}>{this.props.children}</form>;
  }
}
