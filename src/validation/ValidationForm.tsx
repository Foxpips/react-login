import React from "react";

export interface IValidationForm {
  onSubmit: () => void;
}

export class ValidationForm extends React.Component<IValidationForm> {
  refs: any;

  constructor(props: any) {
    super(props);
    this.refs = React.createRef();
  }

  public handleClick = () => {
    console.log("handleClick", this.refs.current);

    this.refs.current.focus();
    this.refs.current.blur();
  };

  private submitForm = (e: any) => {
    e.preventDefault();
    console.log("submitting form");

    console.log("Children", this.props.children);
    console.log("Children", this.props.children as any[0]);
    this.props.onSubmit();
  };

  public render() {
    return <form onSubmit={this.submitForm}>{this.props.children}</form>;
  }
}
