import { API } from "../../API";
const URI = `${API}/api/avatar`;

export const getProfileAvatar = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_PROFILE_AVATAR_FETCHING",
    });
    return fetch(URI, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_PROFILE_AVATAR_SUCCESS",
          payload: data.file,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_PROFILE_AVATAR_ERROR",
          payload: err,
        })
      );
  };
};

export const editProfileAvatar = (data) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_PROFILE_AVATAR_FETCHING",
    });
    return fetch(URI, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "EDIT_PROFILE_AVATAR_SUCCESS",
          payload: `https://thawing-reef-32246.herokuapp.com${data.file}`,
        });
      })
      .catch((err) =>
        dispatch({
          type: "EDIT_PROFILE_AVATAR_ERROR",
          payload: err,
        })
      );
  };
};
