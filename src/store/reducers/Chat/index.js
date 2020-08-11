import { combineReducers } from "redux";
import { dialogueDataReducer } from "./dialogueDataReducer";
import { dialogueIDreducer } from "./dialogueIDreducer";
import { listChatsReducer } from "./listChatsReducer";
import { unreadMessagesReducer } from "./unreadMessagesReducer";
import { newMessagesReducer } from "./newMessagesReducer";

export const chatReducer = combineReducers({
  dialogue: dialogueDataReducer,
  dialogueID: dialogueIDreducer,
  listChats: listChatsReducer,
  unreadMessages: unreadMessagesReducer,
  newMessages: newMessagesReducer,
});
