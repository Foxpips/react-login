import {
  IValidationErrors,
  IValidationObjectItem,
  IValidationError,
} from "../validation.interfaces";

export const Validate = (
  value: any,
  inputName: string,
  validationTypes: IValidationObjectItem[]
): IValidationErrors => {
  const validationErrors: IValidationError[] = [];

  validationTypes.forEach((validationType) => {
    if (validationType.test(value)) {
      validationErrors.push({
        inputName,
        errorMessage: validationType.message,
      });
    }
  });

  return { inputName, value, validationErrors };
};
