import React, { useEffect, useState } from "react";
import DialogueHeader from "../../components/Dialogue/DialogueHeader/";
import DialogueBody from "../../components/Dialogue/DialogueBody";

const Dialogue = ({ Dialogue, isOpen }) => {
  const [connected, setConnected] = useState(false);
  let data;
  let ws;
  if (isOpen) {
    ws = new WebSocket(`${Dialogue}`);
    ws.onopen = () => {
      ws.send(JSON.stringify({ command: "fetch_messages" }));
      setConnected(true);
    };
    ws.onmessage = (e) => {
      console.log(e);
    };
  }

  console.log(data);
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-between position-relative">
      {connected ? (
        <>
          <DialogueHeader />
          <DialogueBody />
        </>
      ) : (
        <div>Найдите заказ и отправьте сообщение заказчику</div>
      )}
    </div>
  );
};

export default Dialogue;
