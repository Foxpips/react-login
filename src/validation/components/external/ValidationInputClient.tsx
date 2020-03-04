import * as React from "react";
import { IValidationObjectItem } from "../../validation.interfaces";

export interface IInputProps {
  ariaLabel?: string;
  disabled?: boolean;
  required?: boolean;
  hasInitialFocus?: boolean;
  id: string;
  maxLength?: number;
  name: string;
  placeholder: string;
  role?: string;
  type?: string;
  value: string | number;
  datavalidationtypes: IValidationObjectItem[];
}

export class ValidationInputClient extends React.Component<IInputProps> {
  public static defaultProps = {
    type: "text"
  };

  public render() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        role={this.props.role}
        type={this.props.type}
        maxLength={this.props.maxLength}
        required={this.props.required}
        aria-label={this.props.ariaLabel}
      />
    );
  }
}
