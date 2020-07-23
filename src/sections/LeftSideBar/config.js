import React from "react";
import Icon from "../../components/Icon";

export const config = [
  {
    id: "1",
    title: "Аккаунт",
    icon: <Icon name="profile" />,
    filledIcon: <Icon name="profile-filled" />,
    path: "/profile",
  },
  {
    id: "2",
    title: "Заказы",
    icon: <Icon name="orders" />,
    filledIcon: <Icon name="orders-filled" />,
    path: "/orders",
  },

  {
    id: "3",
    title: "Найти заказ",
    icon: <Icon name="find-order" />,
    filledIcon: <Icon name="find-order-filled" />,
    path: "/find-order",
  },
  {
    id: "4",
    title: "Список дел",
    icon: <Icon name="todo" />,
    filledIcon: <Icon name="todo-filled" />,
    path: "/todo-list",
  },
];
