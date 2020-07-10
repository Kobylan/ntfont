import React from "react";
import "../../../assets/css/todo-list.css";
import TodoItem from "./TodoItem";
const testData = [
  {
    id: 1,
    title: "Хочу пицу в форме сердца",
    description:
      "casserole Faith at the radiation dome that is when terrifying particles die.",
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
      "Everything we do is connected with solitude: heaven, suffering, grace, acceptance.",
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
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-start text-white w-100 mt-20 mb-15 font-size-20">
        <div className="">Мой список дел</div>
        <div className="btn"> Добавить</div>
      </div>
      {testData.map((item) => (
        <div className="bg-white rounded w-100 padding p-15  mb-15">
          <TodoItem item={item} />
        </div>
      ))}
    </div>
  );
};
export default TodoList;
