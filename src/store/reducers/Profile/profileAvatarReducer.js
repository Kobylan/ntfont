export const profileAvatarReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_PROFILE_AVATAR_FETCHING":
      return { isFetching: true };
    case "GET_PROFILE_AVATAR_SUCCESS":
      return { data: action.payload, isFetching: false };
    case "GET_PROFILE_AVATAR_ERROR":
      return { error: action.payload, isFetching: false };
    case "EDIT_PROFILE_AVATAR_FETCHING":
      return { ...state, isFetching: true };
    case "EDIT_PROFILE_AVATAR_SUCCESS":
      return { data: action.payload, isFetching: false };
    case "EDIT_PROFILE_AVATAR_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
