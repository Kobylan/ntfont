import { API } from "../../API";
const URI = `${API}/myorders/`;

export const getMyOrders = (page) => {
  return (dispatch) => {
    dispatch({
      type: "GET_MY_ORDERS_FETCHING",
    });
    return fetch(`${URI}?page=${page}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_MY_ORDERS_SUCCESS",
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: "GET_MY_ORDERS_ERROR",
          payload: err,
        })
      );
  };
};
