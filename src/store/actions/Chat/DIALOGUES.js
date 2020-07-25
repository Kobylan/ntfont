const URI = `https://thawing-reef-32246.herokuapp.com/chat/chats/`;

export const getDialogues = (page) => {
  return (dispatch) => {
    dispatch({
      type: "GET_DIALOGUES_FETCHING",
    });
    return fetch(`${URI}?page=${page}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_DIALOGUES_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_DIALOGUES_ERROR",
          payload: err,
        })
      );
  };
};
