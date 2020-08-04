export const resolutionReducer = (
  state = { width: window.innerWidth, height: window.innerHeight },
  action
) => {
  switch (action.type) {
    case "SET_RESOLUTION":
      return { width: action.payload.width, height: action.payload.height };
    default:
      return state;
  }
};
