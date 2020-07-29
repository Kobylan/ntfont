import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const socket = new WebSocket(
  "ws://thawing-reef-32246.herokuapp.com/ws/chat/1/"
);

export const responseReducer = (state, action) => {
  return {
    data: action.data,
    connected: action.connected,
    list_chats: action.list_chats,
  };
};
const defaultValue = {
  data: [],
  connected: false,
  list_chats: [],
};
export function createCtx(defaultValue) {
  const defaultUpdate = () => defaultValue;
  const ctx = React.createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props) {
    const reduxDispatch = useDispatch();
    const [store, dispatch] = React.useReducer(responseReducer, defaultValue);
    socket.onopen = () => {
      dispatch({
        ...store,
        connected: true,
      });
      socket.send(JSON.stringify({ command: "list_chats", page: "1" }));
      setInterval(() => {
        socket.send(JSON.stringify({ command: "ping" }));
      }, 5000);
    };

    socket.onmessage = (message) => {
      if (message.data === `{"pong": "pong"}`) {
        return;
      }
      reduxDispatch({
        type: "SET_CHAT_LOADING_FALSE",
      });
      if (JSON.parse(message.data).command === "list_chats") {
        dispatch({
          ...store,
          list_chats: JSON.parse(message.data).list_chats,
        });
        return;
      }
      if (JSON.parse(message.data).command === "new_message") {
        const newMessage = JSON.parse(message.data).message;
        dispatch({
          ...store,
          data: [newMessage, ...store.data.messages],
        });
        return;
      }
      const data = JSON.parse(message.data);
      dispatch({
        ...store,
        data: data,
      });
    };
    return <ctx.Provider value={{ store, dispatch }} {...props} />;
  }
  return [ctx, Provider];
}

const [SocketContext, SocketProvider] = createCtx(defaultValue);

const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(`useSocket must be used within a UserContext`);
  }
  return [context.store, context.update];
};

export { SocketContext, SocketProvider, useSocket };
