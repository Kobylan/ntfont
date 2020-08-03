export const dialogueDataReducer = (
  state = { data: [], loading: false, hasMore: true },
  action
) => {
  switch (action.type) {
    case "FETCH_DIALOGUE_MESSAGES_DATA":
      return {
        data: state.data.concat(action.payload.messages),
        loading: false,
        hasMore: action.payload.next,
      };
    case "FETCH_DIALOGUE_MESSAGES_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "FETCH_DIALOGUE_MESSAGES_NEWDATA":
      return {
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};
