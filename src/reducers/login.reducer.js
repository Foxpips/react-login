const initial_state = {
  user: { name: "guest" }
};

export const setName = name => {
  return {
    payload: { name },
    type: "SIMPLE_ACTION"
  };
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
