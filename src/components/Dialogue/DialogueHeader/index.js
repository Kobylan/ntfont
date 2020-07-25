import React from "react";

const DialogueHeader = ({ author }) => {
  return (
    <div className="h-50px position-absolute bg-white z-1 w-100 rounded-right border-bottom d-flex align-items-center">
      <div
        className="ml-20 rounded-circle"
        style={{
          background: `url(${author.avatar}) no-repeat 50% 50% / cover`,
          width: "30px",
          height: "30px",
        }}
      />
      <div className="ml-20">
        {author.firstName} {author.lastName}
      </div>
    </div>
  );
};

export default DialogueHeader;
