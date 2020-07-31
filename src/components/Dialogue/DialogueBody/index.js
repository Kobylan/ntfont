import React, { useCallback, useEffect, useRef, useState } from "react";
import Message from "./Message";
import Skeleton from "../../Skeleton";
import { socket, useSocket } from "../../../store/socket";
const DialogueBody = () => {
  const { store, dispatch } = useSocket();
  console.log(store.data);
  const [page, setPage] = useState(1);
  useEffect(() => console.log(page), [page]);
  useEffect(() => {
    if (store.currentDialogue !== 0) {
      dispatch({
        ...store,
        dataLoading: true,
      });
      socket.send(
        JSON.stringify({
          command: "fetch_messages",
          recipient: `${store.currentDialogue}`,
          page: `${page}`,
        })
      );
    }
  }, [store.currentDialogue && page]);
  const [messages, setMessages] = useState(store.data?.reverse());
  useEffect(() => {
    !store.dataLoading && store.data !== undefined && setMessages(store.data);
  }, [store.data]);
  //SCROLL TO BOTTOM IN CHAT BODY
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //infinite scroll

  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const last = entries[0];
        if (last.isIntersecting) {
          setPage(page + 1);
        }
      },
      { threshold: 1 }
    )
  );
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
  // const lastOrderElementRef = useCallback(
  //   (node) => {
  //     if (store.dataLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         setPage(page + 1);
  //
  //         dispatch({
  //           ...store,
  //           dataLoading: true,
  //         });
  //         socket.send(
  //           JSON.stringify({
  //             command: "fetch_messages",
  //             recipient: `${store.currentDialogue}`,
  //             page: `${page}`,
  //           })
  //         );
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [store.dataLoading, true]
  // );

  return (
    <div className="h-100 position-relative">
      <div className="h-100 position-absolute w-100 d-flex flex-column justify-content-end">
        <div
          className="h-auto max-height-100 rounded-left p-20 w-100"
          style={{ overflow: "hidden scroll" }}
        >
          {!store.dataLoading && store.data !== undefined ? (
            store.dataLoading ? (
              <Skeleton height={50} width="235" />
            ) : (
              <>
                <div className="w-100 h-50px" ref={setElement}></div>
                {messages?.map((e) => (
                  <div>
                    <Message
                      message={e}
                      from={store.listChats.find(
                        (e) => e.user_id === store.currentDialogue
                      )}
                    />
                  </div>
                ))}
              </>
            )
          ) : (
            "asd"
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default DialogueBody;
