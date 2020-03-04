import * as React from "react";
import {
  InputFieldInterfaces,
  // IInputState,
  // IError,
  IValidationError
} from "../../validation.interfaces";
import * as s from "../../validation.styles";
import { Validate } from "../../helpers/validator";
import { useState, useEffect, useRef } from "react";

export const ValidationInput = (props: InputFieldInterfaces) => {
  // IInputState
  const mounting = useRef(true);
  const [value, setValue] = useState<string | number>(props.value);
  const [errors, setErrors] = useState<any>([]);

  const validateInput = (value: any) => {
    const { errors }: IValidationError = Validate(
      value,
      props.name,
      props.datavalidationtypes
    );

    setValue(value);
    setErrors([...errors]);

    props.setError(errors.length > 0);

    console.log("value", value);
    console.log("errors", errors);
  };

  useEffect(() => {
    if (mounting.current) {
      mounting.current = false;
      console.log("mounting");
    } else {
      validateInput(value);
    }

    return () => {
      console.log("unmounting");
    };
  }, [value, props.fireValidation]);

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    props.handleBlur && props.handleBlur(e);
    validateInput(e.target.value);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    props.handleFocus && props.handleFocus(e);
  };

  const handleInputKeyDown = (e: any) => {
    props.handleKeyDown && props.handleKeyDown(e);
    validateInput(e.target.value);
  };

  const handleInputChange = (e: React.FocusEvent<HTMLInputElement>) => {
    props.handleChange && props.handleChange(e, props.id);
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
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onPaste={props.handlePaste}
      />
      {errors.length > 0 && (
        <s.ErrorMessage>{errors[0].errorMessage}</s.ErrorMessage>
      )}
    </>
  );
};
