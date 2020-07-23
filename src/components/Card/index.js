import React from "react";
// Белый островок
const Card = ({ children }) => {
  return (
    <div className="rounded p-15 bg-white max-width-600px">{children}</div>
  );
};

export default Card;
