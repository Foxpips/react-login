import React, { useState } from "react";
import { ValidationForm } from "../validation/components/external/ValidationForm";
import { ValidationInput } from "../validation/components/internal/ValidationInput";
import ValidationTypes from "../validation/helpers/validation.types";

const Form = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <ValidationForm
        onSubmit={(formFields: any) => {
          setIsValidated(true);

          if (!hasError && isValidated) {
            alert("Success!");
            Object.keys(formFields).map((x) => console.log(formFields[x]));
          }
        }}
      >
        <div>
          <ValidationInput
            value=""
            placeholder="Email"
            id="Email"
            type="input"
            name="Email"
            isValidated={isValidated}
            setIsValidated={setIsValidated}
            setHasError={setHasError}
            datavalidationtypes={[
              ValidationTypes.Required,
              ValidationTypes.Email,
            ]}
          />
        </div>
        <div>
          <ValidationInput
            value=""
            placeholder="Password"
            id="Password"
            type="input"
            name="Password"
            isValidated={isValidated}
            setIsValidated={setIsValidated}
            setHasError={setHasError}
            datavalidationtypes={[
              ValidationTypes.Required,
              ValidationTypes.Password,
            ]}
          />
        </div>

        <button type="submit">Save</button>
      </ValidationForm>
    </>
  );
};

export default Form;
