import React from "react";
import { ReactComponent as Profile } from "../assets/icons/sidebar/profile.svg";
import { ReactComponent as Orders } from "../assets/icons/sidebar/orders.svg";
import { ReactComponent as FindOrder } from "../assets/icons/sidebar/find-order.svg";
import { ReactComponent as TodoList } from "../assets/icons/sidebar/todo.svg";
import { ReactComponent as ProfileFilled } from "../assets/icons/sidebar/profile-filled.svg";
import { ReactComponent as OrdersFilled } from "../assets/icons/sidebar/orders-filled.svg";
import { ReactComponent as FindOrderFilled } from "../assets/icons/sidebar/find-order-filled.svg";
import { ReactComponent as TodoListFilled } from "../assets/icons/sidebar/todo-filled.svg";

export const sidebarConfig = [
  {
    id: "1",
    title: "Аккаунт",
    icon: <Profile />,
    filledIcon: <ProfileFilled />,
    path: "/profile",
  },
  {
    id: "2",
    title: "Заказы",
    icon: <Orders />,
    filledIcon: <OrdersFilled />,
    path: "/orders",
  },

  {
    id: "3",
    title: "Найти заказ",
    icon: <FindOrder />,
    filledIcon: <FindOrderFilled />,
    path: "/find-order",
  },
  {
    id: "4",
    title: "Список дел",
    icon: <TodoList />,
    filledIcon: <TodoListFilled />,
    path: "/todo-list",
  },
];
