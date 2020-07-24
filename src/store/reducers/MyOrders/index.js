export const myOrdersReducer = (
  state = { data: [], isFetching: true },
  action
) => {
  switch (action.type) {
    case "GET_MY_ORDERS_FETCHING":
      if (!state.hasMore) {
        return { data: [], isFetching: true };
      } else {
        return { ...state, isFetching: true };
      }
    case "GET_MY_ORDERS_SUCCESS":
      return {
        data: state.data.concat(action.payload.results),
        hasMore: action.payload.next !== null,
        isFetching: false,
      };
    case "GET_MY_ORDERS_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
