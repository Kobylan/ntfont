import React, { useState } from "react";
import { history } from "../../../history";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import { ReactComponent as Delete } from "../../../assets/icons/todo/delete.svg";
import { ReactComponent as DeleteFilled } from "../../../assets/icons/todo/delete-filled.svg";
import EditTodoItem from "./EditTodoItem";
import { timeAgoUnix } from "../../../components/timeAgoUnix";

const TodoItem = ({ todo }) => {
  console.log(todo);
  return (
    <div className="w-100 rounded bg-white p-15 mb-15 d-flex flex-column text-break overflow-hidden">
      <div className="d-flex font-size-20 align-items-center">
        <div className={`checkbox-${todo.is_active} cursor-pointer`} />
        <div
          className={`ml-5 text-uppercase ${
            todo.is_active ? `text-through` : null
          }`}
        >
          {todo.title}
        </div>
      </div>
      <div className="p-5">{todo.description}</div>
      <div className="d-flex justify-content-between text-muted ">
        <div className="cursor-pointer">{todo.customer.username}</div>
        <div>{timeAgoUnix(todo.deadline)}</div>
      </div>
    </div>
  );
};
export default TodoItem;
{
  /*<div>*/
}
{
  /*  {active === "edit" ? (*/
}
{
  /*    <EditFilled*/
}
{
  /*      onMouseLeave={() => setActive("")}*/
}
{
  /*      onClick={() => setEdit(true)}*/
}
{
  /*      className="cursor-pointer fill-blue w-30px"*/
}
{
  /*    />*/
}
{
  /*  ) : (*/
}
{
  /*    <Edit*/
}
{
  /*      onMouseEnter={() => setActive("edit")}*/
}
{
  /*      onClick={() => setEdit(true)}*/
}
{
  /*      className="cursor-pointer fill-gray08 w-30px"*/
}
{
  /*    />*/
}
{
  /*  )}*/
}
{
  /*  {active === "delete" ? (*/
}
{
  /*    <DeleteFilled*/
}
{
  /*      onMouseLeave={() => setActive("")}*/
}
{
  /*      className="cursor-pointer fill-blue w-30px"*/
}
{
  /*    />*/
}
{
  /*  ) : (*/
}
{
  /*    <Delete*/
}
{
  /*      onMouseEnter={() => setActive("delete")}*/
}
{
  /*      className="cursor-pointer fill-gray08 w-30px"*/
}
{
  /*    />*/
}
{
  /*  )}*/
}
{
  /*</div>*/
}
