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

export interface IValidationError {
  inputName: string | number;
  errorMessage: string;
}

export interface IValidationErrors {
  inputName: string | number;
  value: any;
  validationErrors: IValidationError[];
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
  errors: IValidationError[];
  value: any;
}

export interface InputFieldInterfaces extends IInputProps {
  isValidated: boolean;
  setHasError: (hasError: boolean) => void;
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
  // type?: React.DetailedHTMLProps<
  //   React.HTMLAttributes<HTMLElement>,
  //   HTMLElement
  // >;
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
