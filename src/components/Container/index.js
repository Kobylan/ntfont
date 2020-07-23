import React from "react";
// Если есть правая часть
const Container = ({ children }) => {
  return (
    <div className="d-flex flex-grow-1">
      <div className="w-100 max-width-600px ">
        <div className="w-100">{children}</div>
      </div>
    </div>
  );
};

export default Container;
