import React from "react";

const Skeleton = (props) => {
  const { width, height } = props;
  return (
    <div
      className="animation-skeleton"
      style={{ width: width, height: height }}
    />
  );
};

export default Skeleton;
