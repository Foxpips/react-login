import { setCookie, getCookie, eraseCookie } from "./../utils/cookieHelper";

const initial_state = {
  user: { username: "guest", isLoggedIn: false }
};

export const register = user => {
  setCookie("user", JSON.stringify(user), 1);

  return {
    payload: user,
    type: "REGISTER"
  };
};

export const setDimensions = dimensions => {
  return {
    payload: dimensions,
    type: "SET_DIMENSIONS"
  };
};

export const logout = () => {
  eraseCookie("user");

  return {
    payload: initial_state.user,
    type: "LOGOUT"
  };
};

export const checkIfLoggedIn = () => {
  const userDataFromCookie = JSON.parse(getCookie("user"));
  return {
    payload: userDataFromCookie || initial_state.user,
    type: "IS_LOGGED_IN"
  };
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "SET_DIMENSIONS":
      return {
        ...state,
        dimensions: action.payload
      };
    case "REGISTER":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
