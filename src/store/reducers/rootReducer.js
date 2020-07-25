import { combineReducers } from "redux";
import { profileReducer } from "./Profile";
import { todoListItemsReducer } from "./TodoList/";
import { myOrdersReducer } from "./MyOrders";
import { findOrderReducer } from "./FindOrder";
import { getMyDialogues } from "./Chat";

export const rootReducer = combineReducers({
  profile: profileReducer,
  todoList: todoListItemsReducer,
  myOrders: myOrdersReducer,
  findOrder: findOrderReducer,
  Dialogues: getMyDialogues,
});
