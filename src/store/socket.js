import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const socket = new WebSocket(
  "wss://thawing-reef-32246.herokuapp.com/ws/chat/1/"
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
      //PING PONG FOR CONNECTION NOT CLOSED
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
        //set new_message to store
        reduxDispatch({
          type: "NEW_MESSAGES_DATA",
          payload: data.message,
        });
        //concat new message with current dialogue messages if its from u or from ur interlocutor
        if (
          data.sender_id === `${chat.dialogueID.id}` ||
          data.sender_id === `1`
        ) {
          reduxDispatch({
            type: "FETCH_DIALOGUE_MESSAGES_NEWDATA",
            payload: data.message,
          });
          socket.send(
            JSON.stringify({
              command: "clear_unread_messages",
              recipient: `${chat.dialogueID.id}`,
            })
          );
        }
        //re render unread messages when new message came
        reduxDispatch({
          type: "UNREAD_MESSAGES_LOADING",
          payload: true,
        });
        socket.send(JSON.stringify({ command: "unread_messages" }));
        return;
      }
      //UNREAD MESSAGES
      if (data.command === "unread_message") {
        //set unread messages to store
        if (data.from_user_id !== `${chat.dialogueID.id}`) {
          reduxDispatch({
            type: "UNREAD_MESSAGES_DATA",
            payload: data,
          });
        }
        return;
      }
      //fetch messages
      if (data.command === "messages") {
        //set fetched messages to store
        reduxDispatch({
          type: "FETCH_DIALOGUE_MESSAGES_DATA",
          payload: data,
        });
        //re render unread messages when messages is fetched
        reduxDispatch({
          type: "UNREAD_MESSAGES_LOADING",
          payload: true,
        });
        socket.send(JSON.stringify({ command: "unread_messages" }));
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
