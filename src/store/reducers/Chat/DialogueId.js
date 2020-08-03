export const dialogueID = (state = { id: 0 }, action) => {
  switch (action.type) {
    case "SET_DIALOGUE_ID":
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};
