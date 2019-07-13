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

export const logout = user => {
  eraseCookie("user");

  return {
    payload: initial_state,
    type: "LOGOUT"
  };
};

export const checkIfLoggedIn = () => {
  const userDataFromCookie = JSON.parse(getCookie("user"));
  return {
    payload: userDataFromCookie || initial_state,
    type: "IS_LOGGED_IN"
  };
};

export default (state = initial_state, action) => {
  switch (action.type) {
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
