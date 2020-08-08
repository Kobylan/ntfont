import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "../../../store/hooks/meida";
import Icon from "../../Icon";

const DialogueHeader = ({ setMobile }) => {
  const listChats = useSelector((store) => store.chat.listChats);
  const dialogueID = useSelector((store) => store.chat.dialogueID.id);
  const author = listChats.data.find((e) => e.user_id === dialogueID);
  const minWidth500 = useMedia("(min-width:500px)");
  const minHeight500 = useMedia("(min-height:500px)");
  const dispatch = useDispatch();

  return (
    <div
      className=" bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center"
      style={{ minHeight: "50px" }}
    >
      {listChats.loading ? (
        "loading"
      ) : (
        <>
          {(!minHeight500 || !minWidth500) && (
            <div
              onClick={() => {
                setMobile(true);
                dispatch({
                  type: "LIST_CHATS_DATA_CLEAR",
                });
              }}
              className="ml-10"
            >
              <Icon
                name="back"
                className="fill-dark w-30px cursor-pointer hover-blue"
              />
            </div>
          )}
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
        </>
      )}
    </div>
  );
};

export default DialogueHeader;
