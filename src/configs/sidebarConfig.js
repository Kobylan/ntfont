import React from "react";
import { ReactComponent as Profile } from "../assets/icons/profile.svg";
import { ReactComponent as Orders } from "../assets/icons/orders.svg";
import { ReactComponent as FindOrder } from "../assets/icons/findOrder.svg";
import { ReactComponent as TodoList } from "../assets/icons/todoList.svg";

const size = 30;
export const sidebarConfig = [
  {
    id: "1",
    title: "Аккаунт",
    icon: <Profile width={size} />,
    path: "/profile",
  },
  {
    id: "2",
    title: "Заказы",
    icon: <Orders width={size} />,
    path: "/orders",
  },

  {
    id: "3",
    title: "Найти заказ",
    icon: <FindOrder width={size} />,
    path: "/find-order",
  },
  {
    id: "4",
    title: "Список дел",
    icon: <TodoList width={size} />,
    path: "/todo-list",
  },
];
