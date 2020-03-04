export const setError = (state: any, hasError: boolean) => {
  console.log("state: ", state);
  state.setState({
    hasError
  });
};

export const fireValidation = (state: any) => {
  state.setState({
    fireValidation: true
  });
};
