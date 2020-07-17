import React from "react";

const RightSideTodo = ({ todos }) => {
  return (
    <div>
      <div className="text-white w-100 mb-5 font-size-20 mt-20">
        Мои список дел
      </div>
      {todos?.map((todo) => (
        <div
          className={`bg-white w-100 br p-10 mb-5 d-flex rounded ${
            todo.is_active && `text-through`
          }`}
        >
          <div className={`checkbox-${todo.is_active}`} />
          <div className="ml-5 text-uppercase ">{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default RightSideTodo;
