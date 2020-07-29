export const setChatLoading = (state = { loading: true }, action) => {
  switch (action.type) {
    case "SET_CHAT_LOADING_TRUE":
      return { loading: true };
    case "SET_CHAT_LOADING_FALSE":
      return { loading: false };

    default:
      return state;
  }
};
