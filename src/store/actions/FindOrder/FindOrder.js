import { API } from "../../API";
const URI = `${API}/findorders/`;

export const getFindOrder = (
  page,
  filter = {
    price_gte: 0,
    price_lte: 50000,
    weight_gte: 0,
    weight_lte: 50000,
  }
) => {
  return (dispatch) => {
    dispatch({
      type: "GET_FIND_ORDER_FETCHING",
    });
    if (filter) {
      dispatch({
        type: "GET_FIND_ORDER_CLEAR",
      });
    }
    return fetch(
      `${URI}?page=${page}&price__lte=${filter.price_lte}&price__gte=${filter.price_gte}&weight__lte=${filter.weight_lte}&weight__gte=${filter.weight_gte}`,
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_FIND_ORDER_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_FIND_ORDER_ERROR",
          payload: err,
        })
      );
  };
};
