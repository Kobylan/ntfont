import React from "react";
import { useSocket } from "../../../store/socket";

const DialogueHeader = () => {
  const { store, dispatch } = useSocket();
  const author = store.listChats.find(
    (e) => e.user_id === store.currentDialogue
  );
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
