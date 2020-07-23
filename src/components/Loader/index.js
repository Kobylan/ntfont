import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="animation-rotate mt-10 border-radius-50 border-loading"
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};

export default Loader;
