import React from "react";
// Если нет правой части
const ContainerFluid = ({ children }) => {
  return (
    <div className="w-100 bg-white rounded mv-20 max-width-990px">
      {children}
    </div>
  );
};

export default ContainerFluid;
