import { API } from "../../API";
const URI = `${API}/api/myprofile/`;

export const getProfileInfo = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_PROFILE_INFO_FETCHING",
    });
    return fetch(URI, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_PROFILE_INFO_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_PROFILE_INFO_ERROR",
          payload: err,
        })
      );
  };
};

export const editProfileInfo = (data) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_PROFILE_INFO_FETCHING",
    });
    return fetch(URI, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "EDIT_PROFILE_INFO_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "EDIT_PROFILE_INFO_ERROR",
          payload: err,
        })
      );
  };
};
