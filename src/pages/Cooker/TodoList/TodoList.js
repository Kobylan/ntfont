import React, { useState } from "react";
import "../../../assets/css/todo-list.css";
import useTodo from "../../../hooks/useTodo";
import Loading from "../../../components/Loading";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [page, setPage] = useState(1);
  const { loading, error, todo, hasMore } = useTodo(page);
  console.log(todo);
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-start text-white w-100 mt-20 mb-15 font-size-20">
        <div className="">Мой список дел</div>
        {/*<div className="btn"> Добавить</div>*/}
      </div>
      {todo.map((todo) => (
        <div
          className="bg-white rounded w-100 padding mb-15"
          key={todo.customer.id}
        >
          <TodoItem todo={todo} />
        </div>
      ))}
      {loading && <Loading />}
      {error && (
        <div className="text-white text-align-center m-20">Ошибка!</div>
      )}
    </div>
  );
};
export default TodoList;
