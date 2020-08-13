export const profileReviewsReducer = (
  state = { data: [], isFetching: true },
  action
) => {
  switch (action.type) {
    case "GET_PROFILE_REVIEWS_FETCHING":
      if (!state.hasMore) {
        return { ...state };
      } else {
        return { ...state };
      }
    case "GET_PROFILE_REVIEWS_SUCCESS":
      return {
        data: state.data.concat(action.payload.results),
        hasMore: action.payload.next !== null,
        isFetching: false,
      };
    case "GET_PROFILE_REVIEWS_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
