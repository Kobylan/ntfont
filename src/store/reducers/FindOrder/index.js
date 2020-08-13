export const findOrderReducer = (
  state = { data: [], isFetching: true },
  action
) => {
  switch (action.type) {
    case "GET_FIND_ORDER_CLEAR":
      return { data: [], isFetching: true };
    case "GET_FIND_ORDER_FETCHING":
      if (!state.hasMore) {
        return { ...state };
      } else {
        return { ...state };
      }

    case "GET_FIND_ORDER_SUCCESS":
      return {
        data: state.data.concat(action.payload.results),
        hasMore: action.payload.next !== null,
        isFetching: false,
      };
    case "GET_FIND_ORDER_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
