import { combineReducers } from "redux";
import { profileReducer } from "./Profile";
import { todoListItemsReducer } from "./TodoList/";
import { myOrdersReducer } from "./MyOrders";
import { findOrderReducer } from "./FindOrder";
import { chatReducer } from "./Chat";
import { resolutionReducer } from "./resolution";

export const rootReducer = combineReducers({
  profile: profileReducer,
  todoList: todoListItemsReducer,
  myOrders: myOrdersReducer,
  findOrder: findOrderReducer,
  chat: chatReducer,
  resolution: resolutionReducer,
});
