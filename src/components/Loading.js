import React from "react";

const Loading = () => {
  return (
    <div className="loading d-flex justify-content-center mt-10">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
