export const loggedInReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN_TRUE":
      return { loggedIn: true };
    case "SET_LOGGED_IN_FALSE":
      return { loggedIn: false };
    default:
      return state;
  }
};
