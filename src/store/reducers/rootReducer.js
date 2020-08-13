import { combineReducers } from "redux";
import { profileReducer } from "./Profile";
import { todoListItemsReducer } from "./TodoList/";
import { myOrdersReducer } from "./MyOrders";
import { findOrderReducer } from "./FindOrder";
import { chatReducer } from "./Chat";
import { loggedInReducer } from "./loggedIn/loggedInReducer";

export const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  profile: profileReducer,
  todoList: todoListItemsReducer,
  myOrders: myOrdersReducer,
  findOrder: findOrderReducer,
  chat: chatReducer,
});
