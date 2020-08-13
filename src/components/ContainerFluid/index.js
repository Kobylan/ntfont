import React from "react";
import { useMedia } from "../../store/hooks/meida";
// Если нет правой части
const ContainerFluid = ({ children }) => {
  const minWidth500 = useMedia("(min-width:500px)");
  const minHeight500 = useMedia("(min-height:500px)");
  return (
    <div
      className={`w-100 bg-white rounded ${
        minWidth500 && minHeight500 && `mv-20`
      } max-width-990px`}
    >
      {children}
    </div>
  );
};

export default ContainerFluid;
