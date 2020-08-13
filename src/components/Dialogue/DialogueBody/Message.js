import React from "react";
import TimeAgo from "react-timeago/lib";
import ruStrings from "react-timeago/lib/language-strings/ru";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const Message = ({ message, from }) => {
  const position = from.username === message?.author ? "start" : "end";
  return (
    <div className={`d-flex justify-content-${position}`}>
      <div
        className="rounded text-break-word"
        style={{
          margin: " 5px",
          maxWidth: "80%",
          background: "rgb(29, 161, 242)",
          color: "rgb(255, 255, 255)",
          padding: "0.375rem 0.75rem",
        }}
      >
        {message?.content}
        <div
          className="d-flex justify-content-end"
          style={{
            fontSize: "0.7rem",
            alignSelf: "flex-end",
            color: "rgba(250, 250, 250, 0.5)",
          }}
        >
          <TimeAgo
            date={new Date(message?.timestamp * 1000)}
            formatter={buildFormatter(ruStrings)}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
