import { combineReducers } from "redux";
import { profileReducer } from "./Profile";

export const rootReducer = combineReducers({
  profile: profileReducer,
});
