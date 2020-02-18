import { IValidationObjects } from "../validation.interfaces";

const ValidationTypes: IValidationObjects = {
  Required: {
    type: "Required",
    message: "* This field is required",
    test: value => value.length === 0
  },
  Alphabetical: {
    type: "Alphabetical",
    message: "* Please enter letters only",
    test: value => !AlphaOnly.test(value)
  },
  Password: {
    type: "Password",
    message:
      "* Password requires 6-12 characters one uppercase and one special",
    test: value => !(value.length >= 6 && value.length <= 12)
  },
  Email: {
    type: "Email",
    message: "* Please enter a valid email",
    test: value => !EmailRegEx.test(String(value).toLowerCase())
  },
  Numeric: {
    type: "Numeric",
    message:
      "* Please enter a valid phone number (xxx)-xxx-xxxx OR xxx-xxx-xxxx",
    test: value => !USPhoneNumber.test(value)
  },
  State: {
    type: "State",
    message: "* Please enter a valid state code",
    test: value => !USStateCode.test(value)
  },
  Province: {
    type: "Province",
    message: "* Please enter a valid province code",
    test: value => !CAProvinceCode.test(value)
  },
  CAPostalCode: {
    type: "PostalCode",
    message: "* Please enter a valid postal code (XXX XXX)",
    test: value => !CAPostalCode.test(value)
  }
};

export default ValidationTypes;

/* eslint-disable */
const EmailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const USPhoneNumber = /^((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;

const USStateCode = /^[A-Z]{2}$/i;

const CAProvinceCode = /^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/;

const AlphaOnly = /^[a-zA-Z][a-zA-Z\s]*$/;

const CAPostalCode = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] [0-9][A-Z][0-9]$/;
