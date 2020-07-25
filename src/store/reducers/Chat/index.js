export const getMyDialogues = (
  state = { data: [], isFetching: true },
  action
) => {
  switch (action.type) {
    case "GET_DIALOGUES_CLEAR":
      return { data: [], isFetching: true };
    case "GET_FIND_ORDER_FETCHING":
      if (!state.hasMore) {
        return { data: [], isFetching: true };
      } else {
        return { ...state, isFetching: true };
      }

    case "GET_DIALOGUES_SUCCESS":
      return {
        data: state.data.concat(action.payload),
        hasMore: action.payload.next !== null,
        isFetching: false,
      };
    case "GET_DIALOGUES_ERROR":
      return { error: action.payload, isFetching: false };
    default:
      return state;
  }
};
