import { combineReducers } from "redux";
import { dialogueDataReducer } from "./DialogueDataReducer";
import { dialogueID } from "./DialogueId";
import { listChatsReducer } from "./listChatsReducer";
import { unreadMessagesReducer } from "./unreadMessagesReducer";
import { newMessagesReducer } from "./newMessagesReducer";

export const chatReducer = combineReducers({
  dialogue: dialogueDataReducer,
  dialogueID: dialogueID,
  listChats: listChatsReducer,
  unreadMessages: unreadMessagesReducer,
  newMessages: newMessagesReducer,
});
