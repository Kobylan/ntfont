export const todoListItemsReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_TODO_LIST_FETCHING":
      return { isFetching: true };
    case "GET_TODO_LIST_SUCCESS":
      return {
        data: action.payload.results.map((e) => ({
          ...e,
          deadline: new Date(e.deadline * 1000).toLocaleDateString(),
        })),
        isFetching: false,
      };
    case "GET_TODO_LIST_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
