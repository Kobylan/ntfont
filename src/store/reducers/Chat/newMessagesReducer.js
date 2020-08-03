export const newMessagesReducer = (
  state = { data: [], loading: true },
  action
) => {
  switch (action.type) {
    case "NEW_MESSAGES_DATA":
      return {
        data: [action.payload, ...state.data],
        loading: false,
      };
    default:
      return state;
  }
};
