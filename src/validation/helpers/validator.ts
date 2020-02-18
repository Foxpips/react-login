import {
  IError,
  IValidationObjectItem,
  IValidationError
} from "../validation.interfaces";

export const Validate = (
  value: any,
  inputName: string,
  validationTypes: IValidationObjectItem[]
): IValidationError => {
  const errors: IError[] = [];

  validationTypes.forEach(validationType => {
    if (validationType.test(value)) {
      errors.push({ inputName, errorMessage: validationType.message });
    }
  });

  return { inputName, value, errors };
};
