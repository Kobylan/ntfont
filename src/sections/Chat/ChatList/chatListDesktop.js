import React from "react";
import ChatListElement from "./chatListElement";

const ChatListDesktop = ({ listChats, lastElementRef }) => {
  return (
    <div
      className="w-390px d-flex flex-column h-100 position-relative border-right-grey"
      style={{ maxWidth: "330px", minWidth: "330px" }}
    >
      <div
        className="h-50px d-flex cursor-select flex-column h-50px font-size-20 text-align-center justify-content-center w-100 border-bottom"
        style={{ minHeight: "50px" }}
      >
        Список диалогов
      </div>
      <div
        className="h-100 rounded-left w-100"
        style={{ overflow: "hidden auto" }}
      >
        {listChats.loading
          ? "LOADING"
          : listChats.data.map((e, i) => (
              <div ref={lastElementRef} key={i}>
                <ChatListElement chat={e} />
              </div>
            ))}
        <div className="mv-20" />
      </div>
    </div>
  );
};

export default ChatListDesktop;
