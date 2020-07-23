export const profileRatingReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_PROFILE_RATING_FETCHING":
      return { isFetching: true };
    case "GET_PROFILE_RATING_SUCCESS":
      return {
        data: action.payload,
        isFetching: false,
      };
    case "GET_PROFILE_RATING_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
