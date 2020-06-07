import React from "react";
import profile from "../assets/icons/profile.svg";
import orders from "../assets/icons/orders.svg";
import findOrder from "../assets/icons/findOrder.svg";
import todoList from "../assets/icons/todoList.svg";
const size = 40;
export const sidebarConfig = [
  {
    id: "profile",
    title: "Профиль",
    icon: <img width={size} src={profile} />,
    link: "/profile",
  },
  {
    id: "orders",
    title: "Заказы",
    icon: <img width={size} src={orders} />,
    link: "/orders",
  },
  {
    id: "findOrder",
    title: "Найти заказ",
    icon: <img width={size} src={findOrder} />,
    link: "/find-order",
  },
  {
    id: "todoList",
    title: "Список дел",
    icon: <img width={size} src={todoList} />,
    link: "/todo-list",
  },
];
