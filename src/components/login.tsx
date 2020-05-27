import React, { useState } from "react";
import { ValidationForm } from "../validation/components/ValidationForm";
import { ValidationInput } from "../validation/components/ValidationInput";
import ValidationTypes from "../validation/helpers/validation.types";

const Form = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   if (isValidated && !hasError) {
  //     alert("success");
  //   }
  // }, [isValidated]);

  return (
    <>
      <ValidationForm
        onSubmit={(formFields: any) => {
          setIsValidated(true);

          if (!hasError && isValidated) {
            alert("success");
          }
          console.log("no error", !hasError);
          console.log("isValidated", isValidated);
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
