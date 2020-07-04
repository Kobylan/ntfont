import React from "react";

const Skeleton = (props) => {
  const { width, height } = props;
  return (
    <div className="skeleton br-3" style={{ width: width, height: height }} />
  );
};

export default Skeleton;
