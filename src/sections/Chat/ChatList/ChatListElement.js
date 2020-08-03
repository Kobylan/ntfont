import React from "react";
import { timeAgoUnix } from "../../../utils/time";
import { useDispatch, useSelector } from "react-redux";

//calculating how many new messages
const calculate = (arr, id) => {
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].from_user_id === id) {
      index = i;
    }
  }
  let count = 0;
  arr[index].messages.forEach(() => count++);
  return count;
};
//checking is any new message from this person
const checkIfNewMessage = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].from_user_id === id) {
      return true;
    }
  }
  return false;
};

const ChatListElement = ({ chat }) => {
  const dispatch = useDispatch();
  const unreadMessages = useSelector((store) => store.chat.unreadMessages);
  return (
    <div
      className="w-100 d-flex align-items-center cursor-pointer hover-whitegray "
      key={chat.id}
      style={{
        padding: "10px 20px",
      }}
      onClick={() =>
        dispatch({
          type: "SET_DIALOGUE_ID",
          payload: chat.user_id,
        })
      }
    >
      <img
        src={`${chat.avatar}`}
        className="rounded-circle"
        width={50}
        height={50}
        style={{
          border: "2px solid green",
        }}
      />
      <div className="w-100 ml-10 ">
        <div className="d-flex w-100 justify-content-between">
          <div>
            {chat.first_name} {chat.last_name}
          </div>
          <div className="text-muted align-self-end  mr-10 ">
            {timeAgoUnix(chat.last_message_time)}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-muted">{chat.last_message.content}</div>
          {!unreadMessages.loading &&
            checkIfNewMessage(unreadMessages.data, chat.user_id) && (
              <div
                className="ml-10 rounded-circle bg-blue text-white text-align-center mr-20"
                style={{ width: "20px", height: "20px" }}
              >
                {calculate(unreadMessages.data, chat.user_id)}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChatListElement;
