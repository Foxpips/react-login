import * as React from "react";
import {
  InputFieldInterfaces,
  IValidationErrors,
} from "../validation.interfaces";
import * as s from "../validation.styles";
import { Validate } from "../helpers/validator";
import { useState, useEffect } from "react";

export const ValidationInput = (props: InputFieldInterfaces) => {
  const [value, setValue] = useState<string | number>(props.value);
  const [errors, setErrors] = useState<any>([]);

  const validateInput = (value: any) => {
    const { validationErrors }: IValidationErrors = Validate(
      value,
      props.name,
      props.datavalidationtypes
    );

    setValue(value);
    setErrors([...validationErrors]);
    props.setHasError(validationErrors.length > 0);
  };

  useEffect(() => {
    if (props.isValidated) {
      validateInput(value);
    }
  }, [props.isValidated]);

  const handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    props.handleChange && props.handleChange(e, props.id);
    validateInput(e.target.value);
  };

  const handleBlurChange = (e: React.FocusEvent<HTMLInputElement>) => {
    props.handleBlur && props.handleBlur(e);
    validateInput(e.target.value);
  };

  return (
    <>
      <input
        // {...props}
        value={value}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        role={props.role}
        type={props.type}
        maxLength={props.maxLength}
        required={props.required}
        aria-label={props.ariaLabel}
        onBlur={handleBlurChange}
        onFocus={props.handleFocus}
        onChange={handleInputChange}
        onKeyDown={props.handleKeyDown}
        onPaste={props.handlePaste}
      />
      {errors.length > 0 && (
        <s.ErrorMessage>{errors[0].errorMessage}</s.ErrorMessage>
      )}
    </>
  );
};
