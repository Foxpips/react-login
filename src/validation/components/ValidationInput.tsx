import * as React from "react";
import {
  InputFieldInterfaces,
  IInputState,
  IError,
  IValidationError
} from "../validation.interfaces";
import * as s from "../validation.styles";
import { Validate } from "../helpers/validator";

export class ValidationInput extends React.Component<
  InputFieldInterfaces,
  IInputState
> {
  public static defaultProps = {
    type: "text"
  };

  constructor(props: InputFieldInterfaces) {
    super(props);

    this.state = {
      value: this.props.value,
      errors: []
    };
  }

  private validateField = (value: any) => {
    const validationErrors: IValidationError = Validate(
      value,
      this.props.name,
      this.props.datavalidationtypes
    );

    this.setState({
      value,
      errors: { ...this.state.errors }
    });

    validationErrors.errors.forEach((error: IError) => {
      this.setState({ errors: [error] });
    });

    this.props.setHasError(validationErrors.errors.length > 0);
  };

  public componentDidUpdate(prevProps: any) {
    if (
      this.props.fireValidation &&
      prevProps.fireValidation !== this.props.fireValidation
    ) {
      this.validateField(this.state.value);
    }
  }

  public validateInput = (e: any) => {
    const value = e.target.value;
    this.validateField(value);
  };

  public getAlert = () => {
    alert(this.props.name);
  };

  public handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.props.handleBlur && this.props.handleBlur(e);
    this.validateInput(e);
  };

  public handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    this.props.handleFocus && this.props.handleFocus(e);
  };

  public handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.props.handleKeyDown && this.props.handleKeyDown(e);
    this.validateInput(e);
  };

  public handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    this.props.handleChange && this.props.handleChange(e, this.props.id);
    this.validateInput(e);
  };

  public render() {
    return (
      <>
        <input
          {...this.props}
          ref={this.props.inputRef}
          value={this.state.value}
          id={this.props.id}
          name={this.props.name}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          role={this.props.role}
          type={this.props.type}
          maxLength={this.props.maxLength}
          required={this.props.required}
          aria-label={this.props.ariaLabel}
          onBlur={this.handleInputBlur}
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
          onPaste={this.props.handlePaste}
        />
        {this.state.errors.length > 0 && (
          <s.ErrorMessage>{this.state.errors[0].errorMessage}</s.ErrorMessage>
        )}
      </>
    );
  }
}

// export default React.forwardRef(ValidationInput as any);
