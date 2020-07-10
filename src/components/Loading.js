import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="animation-rotate mt-10 border-radius-50 border-loading"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Loading;
