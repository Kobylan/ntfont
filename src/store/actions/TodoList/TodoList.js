import { API } from "../../API";
const URI = `${API}/api/todo/`;

export const getTodoList = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_TODO_LIST_FETCHING",
    });
    return fetch(URI, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_TODO_LIST_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_TODO_LIST_ERROR",
          payload: err,
        })
      );
  };
};
