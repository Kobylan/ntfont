import React from "react";
import TodoList from "../../sections/TodoList/";
import ContainerFluid from "../../components/ContainerFluid";
import { useMedia } from "../../store/hooks/meida";

const Calendar = () => {
  const min1100 = useMedia("(min-width:1100px)");
  const minWidth680 = useMedia("(min-width:680px)");
  const minWidth = useMedia("(min-width:500px)");
  const minHeight = useMedia("(min-height:500px)");
  return (
    <div
      className={`w-100 bg-white ${
        minWidth680 ? `w-100` : min1100 ? `max-width-990px` : `max-width-600px`
      } h-fit`}
      style={{
        maxWidth: `${minWidth && minHeight ? null : window.innerWidth}px`,
      }}
    >
      <TodoList />
    </div>
  );
};

export default Calendar;
