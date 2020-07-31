import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddChatNewMessage } from "./actions/chatNewMessage/ChatNewMessage";

export const socket = new WebSocket(
  "ws://thawing-reef-32246.herokuapp.com/ws/chat/3/"
);

export const responseReducer = (state, action) => {
  return {
    connected: action.connected,
    listChats: action.listChats,
    listChatsLoading: action.listChatsLoading,
    data: action.data,
    dataLoading: action.dataLoading,
    currentDialogue: action.currentDialogue,
    newMessages: action.newMessages,
  };
};
const defaultValue = {
  connected: false,
  listChats: [],
  listChatsLoading: true,
  data: [],
  dataLoading: true,
  currentDialogue: 0,
  newMessages: [],
};
export function createCtx(defaultValue) {
  const ctx = React.createContext({
    state: defaultValue,
  });
  function Provider(props) {
    const reduxDispatch = useDispatch();
    const [store, dispatch] = React.useReducer(responseReducer, defaultValue);
    socket.onopen = () => {
      dispatch({
        ...store,
        connected: true,
      });
      setInterval(() => {
        socket.send(JSON.stringify({ command: "ping" }));
      }, 30000);
    };

    socket.onmessage = (message) => {
      if (message.data === `{"pong": "pong"}`) {
        return;
      }
      if (JSON.parse(message.data).command === "list_chats") {
        const list = JSON.parse(message.data).list_chats;
        dispatch({
          ...store,
          listChats: store.listChats.concat(list),
          listChatsLoading: false,
        });
        return;
      }
      if (JSON.parse(message.data).command === "new_message") {
        const newMessage1 = JSON.parse(message.data).message;
        if (
          JSON.parse(message.data).sender_id === `${store.currentDialogue}` ||
          JSON.parse(message.data).sender_id === `3`
        ) {
          reduxDispatch(AddChatNewMessage(newMessage1));
        }

        //в ифке надо будет 3 поменять на мой айди
        if (
          JSON.parse(message.data).sender_id === `${store.currentDialogue}` ||
          JSON.parse(message.data).sender_id === `3`
        ) {
          dispatch({
            ...store,
            dataLoading: false,
            newMessages: store.newMessages.concat(newMessage1),
            data: store.data.concat(newMessage1),
          });
        }

        return;
      }
      const data = JSON.parse(message.data).messages;
      dispatch({
        ...store,
        dataLoading: false,
        data: store.data.concat(data),
      });
    };
    return <ctx.Provider value={{ store, dispatch }} {...props} />;
  }
  return [ctx, Provider];
}

const [SocketContext, SocketProvider] = createCtx(defaultValue);

const useSocket = () => {
  const { store, dispatch } = useContext(SocketContext);
  if (!store) {
    throw new Error(`useSocket must be used within a UserContext`);
  }
  return { store, dispatch };
};

export { SocketContext, SocketProvider, useSocket };
