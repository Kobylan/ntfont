import React from "react";
import "../../../assets/css/todo-list.css";
import TodoItem from "./TodoItem";
const testData = [
  {
    id: 1,
    title: "Хочу пицу в форме сердца",
    description: "Торт ",
    date: "15/9/2212",
    owner: {
      name: "Adil Kairolla",
      id: "112312",
    },
    status: true,
  },
  {
    id: 2,
    title: "Торт малочная девочка",
    description:
      "Торт с телефоном и радугойТорт с телефоном и радугойТорт с телефоном и радугойТорт с телефоном и радугой",
    date: "15/9/2212",
    owner: {
      name: "Adil Kairolla",
      id: "112312",
    },
    status: true,
  },
  {
    id: 3,
    title: "Дамские пальчики",
    description:
      "Торт с машикной и радугойТорт с машикной и радугойТорт с машикной и радугойТорт с машикной и радугой",
    date: "15/9/2212",
    owner: {
      name: "Adil Kairolla",
      id: "112312",
    },
    status: false,
  },
];
const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="card-title">
        <div className="">Мой список дел</div>

        <div className="btn btn-primary"> Добавить</div>
      </div>

      {testData.map((item) => (
        <div className="card mb-3">
          <TodoItem item={item} />
        </div>
      ))}
    </div>
  );
};
export default TodoList;
