import React from "react";
import { useSelector } from "react-redux";

const DialogueHeader = () => {
  const listChats = useSelector((store) => store.chat.listChats);
  const dialogueID = useSelector((store) => store.chat.dialogueID.id);
  const author = listChats.data.find((e) => e.user_id === dialogueID);
  return (
    <div
      className=" bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center"
      style={{ minHeight: "50px" }}
    >
      <div
        className="ml-20 rounded-circle"
        style={{
          background: `url(${author.avatar}) no-repeat 50% 50% / cover`,
          width: "30px",
          height: "30px",
        }}
      />
      <div className="ml-20">
        {author.first_name} {author.last_name}
      </div>
    </div>
  );
};

export default DialogueHeader;
