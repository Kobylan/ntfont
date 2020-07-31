export const AddChatNewMessage = (message) => {
  return (dispatch) => {
    dispatch({
      type: "CHAT_NEW_MESSAGE_ADD",
      payload: message,
    });
  };
};
