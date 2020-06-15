import React from "react";
import profile from "../assets/icons/profile.svg";
import orders from "../assets/icons/orders.svg";
import findOrder from "../assets/icons/findOrder.svg";
import todoList from "../assets/icons/todoList.svg";
const size = 30;
export const sidebarConfig = [
  {
    id: "1",
    title: "Аккаунт",
    icon: <img width={size} src={profile} alt="Аккаунт" />,
    link: "/profile",
  },
  {
    id: "orde2rs",
    title: "Заказы",
    icon: <img width={size} src={orders} alt="Заказы" />,
    link: "/orders",
  },

  {
    id: "3",
    title: "Найти заказ",
    icon: <img width={size} src={findOrder} alt="Найти заказ" />,
    link: "/find-order",
  },
  {
    id: "4",
    title: "Список дел",
    icon: <img width={size} src={todoList} alt="Список дел" />,
    link: "/todo-list",
  },
];
