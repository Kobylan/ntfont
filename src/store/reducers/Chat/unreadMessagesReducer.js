export const unreadMessagesReducer = (
  state = { data: [], loading: true },
  action
) => {
  switch (action.type) {
    case "UNREAD_MESSAGES_DATA":
      return {
        data: action.payload.unread_messages,
        loading: false,
      };
    case "UNREAD_MESSAGES_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
