import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const socket = new WebSocket(
  "ws://thawing-reef-32246.herokuapp.com/ws/chat/1/"
);

export const responseReducer = (state, action) => {
  return {
    connected: action.connected,
  };
};
const defaultValue = {
  connected: false,
};
export function createCtx(defaultValue) {
  const ctx = React.createContext({
    state: defaultValue,
  });
  function Provider(props) {
    const [store, dispatch] = React.useReducer(responseReducer, defaultValue);
    const reduxDispatch = useDispatch();
    const chat = useSelector((store) => store.chat);
    socket.onopen = () => {
      dispatch({
        ...store,
        connected: true,
      });
      //get Undread Messages
      socket.send(JSON.stringify({ command: "unread_messages" }));
      reduxDispatch({
        type: "UNREAD_MESSAGES_LOADING",
        payload: true,
      });
      //ping pong
      setInterval(() => {
        socket.send(JSON.stringify({ command: "ping" }));
      }, 30000);
    };

    socket.onmessage = (message) => {
      //PING POING FOR CONNECTION NOT CLOSED
      if (message.data === `{"pong": "pong"}`) {
        return;
      }
      const data = JSON.parse(message.data);
      //LIST CHATS
      if (data.command === "list_chats") {
        reduxDispatch({
          type: "LIST_CHATS_DATA",
          payload: data,
        });
        return;
      }
      //NEW MESSAGES
      if (data.command === "new_message") {
        if (data.sender_id === `${chat.dialogueID}` || data.sender_id === `1`) {
          reduxDispatch({
            type: "FETCH_DIALOGUE_MESSAGES_NEWDATA",
            payload: data.message,
          });
        }
        return;
      }
      //UNREAD MESSAGES
      if (data.command === "unread_message") {
        reduxDispatch({
          type: "UNREAD_MESSAGES_DATA",
          payload: data,
        });
        return;
      }
      if (data.command === "messages") {
        reduxDispatch({
          type: "FETCH_DIALOGUE_MESSAGES_DATA",
          payload: data,
        });
      }
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
