import React, { useState } from "react";
import { ValidationForm } from "../validation/components/ValidationForm";
import { ValidationInput } from "../validation/components/ValidationInput";
import ValidationTypes from "../validation/helpers/validation.types";

const Form = () => {
  const [errors, setErrors] = useState<any>({ Email: true, Password: true });

  return (
    <>
      <ValidationForm
        errors={errors}
        onSubmit={(formFields: any) => {
          alert("success!");
          console.log(formFields);
        }}
      >
        <div>
          <ValidationInput
            value=""
            placeholder="Email"
            id="Email"
            type="input"
            name="Email"
            setErrors={setErrors}
            errors={errors}
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
            setErrors={setErrors}
            errors={errors}
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
