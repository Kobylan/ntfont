import React from "react";

const Skeleton = (props) => {
  const { width = "100%", height, className } = props;
  return (
    <div
      className={`animation-skeleton rounded ${className}`}
      style={{ width: width, height: height }}
    />
  );
};

export default Skeleton;
