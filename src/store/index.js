import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
