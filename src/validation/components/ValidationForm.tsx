import React, { useEffect, useState } from "react";
import ValidationContext from "./ValidationContext";

export interface IValidationForm {
  onSubmit: (formFields: {}) => void;
  // fireValidation: any;
  // validationFired: boolean;
  errors: any;
  children: any;
}

export const ValidationForm = (props: IValidationForm) => {
  const [formFields, setFormFields] = useState({});
  const [validationFired, fireValidation] = useState(false);

  useEffect(() => {
    const { errors, onSubmit } = props;
    // const { validationFired, errors, onSubmit, fireValidation } = props;
    if (
      validationFired &&
      !Object.keys(errors).some((x) => errors[x] === true)
    ) {
      onSubmit(formFields);
    }
    fireValidation(false);
  }, [props, formFields, validationFired]);

  const submitForm = (e: any) => {
    e.preventDefault();

    const fields: any = {};
    Object.keys(e.target.elements).forEach((x) => {
      fields[e.target.elements[x].name] = e.target.elements[x].value;
    });

    setFormFields(fields);
    fireValidation(true);
  };

  return (
    <ValidationContext.Provider value={validationFired}>
      <form onSubmit={submitForm}>{props.children}</form>
    </ValidationContext.Provider>
  );
};
