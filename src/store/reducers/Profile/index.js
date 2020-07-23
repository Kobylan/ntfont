import { combineReducers } from "redux";
import { profileInfoReducer } from "./profileInfoReducer";
import { profileAvatarReducer } from "./profileAvatarReducer";
import { profileReviewsReducer } from "./profileReviewsReducer";
import { profileRatingReducer } from "./profileRatingReducer";

export const profileReducer = combineReducers({
  info: profileInfoReducer,
  avatar: profileAvatarReducer,
  reviews: profileReviewsReducer,
  rating: profileRatingReducer,
});
