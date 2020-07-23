import React from "react";
import { ReactComponent as AddFile } from "../../assets/icons/add-file.svg";
import { ReactComponent as AddImage } from "../../assets/icons/add-image.svg";
import { ReactComponent as AddImageFilled } from "../../assets/icons/add-image-filled.svg";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as DeleteFilled } from "../../assets/icons/delete-filled.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as EditFilled } from "../../assets/icons/edit-filled.svg";
import { ReactComponent as FindOrder } from "../../assets/icons/find-order.svg";
import { ReactComponent as FindOrderFilled } from "../../assets/icons/find-order-filled.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Orders } from "../../assets/icons/orders.svg";
import { ReactComponent as OrdersFilled } from "../../assets/icons/orders-filled.svg";
import { ReactComponent as Payments } from "../../assets/icons/payments.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as ProfileFilled } from "../../assets/icons/profile-filled.svg";
import { ReactComponent as Save } from "../../assets/icons/save.svg";
import { ReactComponent as SaveFilled } from "../../assets/icons/save-filled.svg";
import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { ReactComponent as SendFilled } from "../../assets/icons/save-filled.svg";
import { ReactComponent as TimeAgo } from "../../assets/icons/time-ago.svg";
import { ReactComponent as Todo } from "../../assets/icons/todo.svg";
import { ReactComponent as TodoFilled } from "../../assets/icons/todo-filled.svg";
import { ReactComponent as Weight } from "../../assets/icons/weight.svg";
// Иконки - принимает имя, размеры(не обязательно) и класс
const Icon = ({ name, width, height, className, onClick }) => {
  const getIcon = () => {
    switch (name) {
      case "add-file":
        return <AddFile width={width} height={height} className={className} />;
      case "add-image":
        return <AddImage width={width} height={height} className={className} />;
      case "add-image-filled":
        return (
          <AddImageFilled width={width} height={height} className={className} />
        );
      case "back":
        return <Back width={width} height={height} className={className} />;
      case "delete":
        return <Delete width={width} height={height} className={className} />;
      case "delete-filled":
        return (
          <DeleteFilled width={width} height={height} className={className} />
        );
      case "edit":
        return <Edit width={width} height={height} className={className} />;
      case "edit-filled":
        return (
          <EditFilled width={width} height={height} className={className} />
        );
      case "find-order":
        return (
          <FindOrder width={width} height={height} className={className} />
        );
      case "find-order-filled":
        return (
          <FindOrderFilled
            width={width}
            height={height}
            className={className}
          />
        );
      case "logo":
        return <Logo width={width} height={height} className={className} />;
      case "logout":
        return <Logout width={width} height={height} className={className} />;
      case "orders":
        return <Orders width={width} height={height} className={className} />;
      case "orders-filled":
        return (
          <OrdersFilled width={width} height={height} className={className} />
        );
      case "payments":
        return <Payments width={width} height={height} className={className} />;
      case "profile":
        return <Profile width={width} height={height} className={className} />;
      case "profile-filled":
        return (
          <ProfileFilled width={width} height={height} className={className} />
        );
      case "save":
        return <Save width={width} height={height} className={className} />;
      case "save-filled":
        return (
          <SaveFilled width={width} height={height} className={className} />
        );
      case "send":
        return <Send width={width} height={height} className={className} />;
      case "send-filled":
        return (
          <SendFilled width={width} height={height} className={className} />
        );
      case "time-ago":
        return <TimeAgo width={width} height={height} className={className} />;
      case "todo":
        return <Todo width={width} height={height} className={className} />;
      case "todo-filled":
        return (
          <TodoFilled width={width} height={height} className={className} />
        );
      case "weight":
        return <Weight width={width} height={height} className={className} />;
      default:
        return <div />;
    }
  };
  if (onClick) {
    return <div onClick={onClick}>{getIcon()}</div>;
  } else {
    return getIcon();
  }
};

export default Icon;
