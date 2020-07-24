import React from "react";
const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const TodoItem = ({ day, data, index }) => {
  return (
    <div className="d-flex w-100 h-150px bg-gray rounded border-bottom hover-float ">
      <div className="border-grey-right text-align-center font-size-20 text-muted">
        <div className="p-15 text w-150px">
          {day} {days[index]}
        </div>
      </div>
      <div className="w-100 d-flex overflow-hidden-y">
        {data.map((e) => (
          <div className="min-width-200px max-width-200px h-150px p-15 cursor-pointer">
            <div className="h-100 bg-white border-blue-left-3px rounded-right p-5 hover-border hover-float text-break">
              <div className="mb-10 text-muted"> для {e.customer.username}</div>
              <div>{e.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoItem;
