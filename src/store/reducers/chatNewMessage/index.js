export const chatNewMessageReduser = (state = { data: [] }, action) => {
  switch (action.type) {
    case "CHAT_NEW_MESSAGE_ADD":
      return { data: state.data.concat(action.payload) };
    case "CHAT_NEW_MESSAGE_DELETE":
      return { data: state.data.concat(action.payload) };
    default:
      return state;
  }
};
