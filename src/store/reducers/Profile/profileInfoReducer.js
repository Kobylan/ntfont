export const profileInfoReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_PROFILE_INFO_FETCHING":
      return { isFetching: true };
    case "GET_PROFILE_INFO_SUCCESS":
      return { data: action.payload, isFetching: false };
    case "GET_PROFILE_INFO_ERROR":
      return { error: action.payload, isFetching: false };
    case "EDIT_PROFILE_INFO_FETCHING":
      return { isFetching: true };
    case "EDIT_PROFILE_INFO_SUCCESS":
      return { data: action.payload, isFetching: false };
    case "EDIT_PROFILE_INFO_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
