export const isFormValid = formErrors => {
  return !Object.values(formErrors).some(val => val.length > 0);
};

export const validateRequiredFields = (fields, formErrors) =>
  Object.keys(fields).forEach(
    val =>
      fields[val].length <= 0 && (formErrors[val] = "* This field is required")
  );

export const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const validateField = (formErrors, name, value) => {
  switch (name) {
    case "username":
      formErrors.username =
        value.length < 3 ? "minimum 3 characters required" : "";
      break;
    case "email":
      formErrors.email = validateEmail(value)
        ? ""
        : "please enter a valid email address";
      break;
    case "password":
      formErrors.password =
        value.length > 5 && value.length < 13
          ? ""
          : "password must be between 6-12 characters";
      break;
    default:
      break;
  }
  return formErrors;
};
