import { API } from "../../API";
const URI = `${API}/api/review/`;

export const getProfileReviews = (page) => {
  return (dispatch) => {
    dispatch({
      type: "GET_PROFILE_REVIEWS_FETCHING",
    });
    return fetch(`${URI}?page=${page}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_PROFILE_REVIEWS_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_PROFILE_REVIEWS_ERROR",
          payload: err,
        })
      );
  };
};
