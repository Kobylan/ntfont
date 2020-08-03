import { API } from "../../API";
const URI = `${API}/rating/`;

export const getProfileRating = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_PROFILE_RATING_FETCHING",
    });
    return fetch(URI, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_PROFILE_RATING_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_PROFILE_RATING_ERROR",
          payload: err,
        })
      );
  };
};
