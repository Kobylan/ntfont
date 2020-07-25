import React, { useEffect, useState } from "react";
import DialogueHeader from "../../components/Dialogue/DialogueHeader/";
import DialogueBody from "../../components/Dialogue/DialogueBody";

const Dialogue = ({ Dialogue, isOpen }) => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState();
  useEffect(() => {
    if (isOpen) {
      const ws = new WebSocket(`${Dialogue.url}`);
      ws.onopen = () => {
        ws.send(JSON.stringify({ command: "fetch_messages" }));
        setConnected(true);
      };
      ws.onmessage = (response) => {
        setMessages(JSON.parse(response.data).messages);
      };
    }
  }, [Dialogue]);

  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      {connected ? (
        <>
          {messages && (
            <DialogueBody
              from={Dialogue.author.username}
              messages={messages}
              author={Dialogue.author}
            />
          )}
        </>
      ) : (
        <div>Найдите заказ и отправьте сообщение заказчику</div>
      )}
    </div>
  );
};

export default Dialogue;
