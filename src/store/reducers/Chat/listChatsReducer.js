export const listChatsReducer = (
  state = { data: [], loading: true, hasMore: true },
  action
) => {
  switch (action.type) {
    case "LIST_CHATS_DATA_CLEAR":
      return { data: [], loading: true, hasMore: true };
    case "LIST_CHATS_DATA":
      return {
        data: state.data.concat(action.payload.list_chats),
        loading: false,
        hasMore: action.payload.next,
      };
    case "LIST_CHATS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
