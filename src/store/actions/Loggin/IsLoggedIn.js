import { API } from "../../API";
const URI = `${API}/api/TEST/`;

export const isLoggedIn = () => {
  return (dispatch) => {
    return fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "SET_LOGGED_IN_TRUE",
        });
      })
      .catch(() =>
        dispatch({
          type: "SET_LOGGED_IN_FALSE",
        })
      );
  };
};
