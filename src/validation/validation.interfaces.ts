export interface IValidationObjectItem {
  type: string;
  message: string;
  test: (value: any) => boolean;
}
export interface IValidationObjects {
  Alphabetical: IValidationObjectItem;
  Email: IValidationObjectItem;
  Password: IValidationObjectItem;
  Numeric: IValidationObjectItem;
  Required: IValidationObjectItem;
  State: IValidationObjectItem;
  Province: IValidationObjectItem;
  CAPostalCode: IValidationObjectItem;
}

export interface IError {
  inputName: string | number;
  errorMessage: string;
}

export interface IValidationError {
  inputName: string | number;
  value: any;
  errors: IError[];
}

export interface IValidationObjectItem {
  type: string;
  message: string;
  test: (value: any) => boolean;
}
export interface IValidationObjects {
  Alphabetical: IValidationObjectItem;
  Email: IValidationObjectItem;
  Password: IValidationObjectItem;
  Numeric: IValidationObjectItem;
  Required: IValidationObjectItem;
  State: IValidationObjectItem;
  Province: IValidationObjectItem;
  CAPostalCode: IValidationObjectItem;
}

export interface IInputState {
  errors: IError[];
  value: any;
}

export interface InputFieldInterfaces extends IInputProps {
  fireValidation: boolean;
  setError: (hasError: boolean) => void;
}

export interface IInputProps {
  ariaLabel?: string;
  disabled?: boolean;
  required?: boolean;
  hasInitialFocus?: boolean;
  id: string;
  maxLength?: number;
  name: string;
  handleBlur?: (e: any) => void;
  handleChange?: (e: any, id: string) => void;
  handleFocus?: (e: any) => void;
  handleKeyDown?: (e: any) => void;
  handleKeyUp?: (e: any) => void;
  handlePaste?: (e: any) => void;
  placeholder: string;
  role?: string;
  type?: string;
  value: string | number;
  datavalidationtypes: IValidationObjectItem[];
}

export interface ISetErrorValidationState {
  setState: ({ hasError: boolean }: any) => void;
}
export interface IFireValidationState {
  setState: ({ fireValidation: boolean }: any) => void;
}
export interface IValidationState {
  fireValidation: boolean;
  hasError: boolean;
}
