import React, { useCallback, useEffect, useRef, useState } from "react";
import Message from "./Message";
import { socket } from "../../../store/socket";
import { useDispatch, useSelector } from "react-redux";
const DialogueBody = () => {
  const { dialogue, dialogueID, listChats } = useSelector(
    (store) => store.chat
  );
  const reduxDispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!dialogue.loading) {
      reduxDispatch({
        type: "FETCH_DIALOGUE_MESSAGES_LOADING",
        payload: true,
      });
      socket.send(
        JSON.stringify({
          command: "fetch_messages",
          recipient: `${dialogueID.id}`,
          page: `${page}`,
        })
      );
    }
  }, [dialogueID.id && page]);
  //infinite scroll
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (dialogue.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && dialogue.hasMore) {
          setPage(page + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [dialogue.loading, dialogue.hasMore, dialogue.data]
  );
  return (
    <div className="h-100 position-relative">
      <div className="h-100 position-absolute w-100 d-flex flex-column justify-content-end">
        <div
          className="h-auto max-height-100 rounded-left p-20 w-100 d-flex"
          style={{ overflow: "hidden scroll", flexDirection: "column-reverse" }}
        >
          {dialogue.data?.map((e, i) => (
            <div ref={lastElementRef} key={i}>
              <Message
                message={e}
                from={listChats.data.find((e) => e.user_id === dialogueID.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogueBody;
