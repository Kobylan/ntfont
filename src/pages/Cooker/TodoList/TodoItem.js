import React, { useState } from "react";
import { history } from "../../../history";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import { ReactComponent as Delete } from "../../../assets/icons/todo/delete.svg";
import { ReactComponent as DeleteFilled } from "../../../assets/icons/todo/delete-filled.svg";
import EditTodoItem from "./EditTodoItem";

const TodoItem = (props) => {
  const { item } = props;
  const [status, setStatus] = useState(item.status);
  const [active, setActive] = useState("");
  const [edit, setEdit] = useState(false);
  return edit ? (
    <EditTodoItem item={item} setEdit={(e) => setEdit(e)} />
  ) : (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div
            className={`checkbox-${status} pointer`}
            onClick={(e) => setStatus(!status)}
          />
          <div
            className={`ml-5 text-uppercase ${
              item.status ? `text-through` : null
            }`}
          >
            {item.title}
          </div>
        </div>
        <div>
          {active === "edit" ? (
            <EditFilled
              onMouseLeave={() => setActive("")}
              onClick={() => setEdit(true)}
              className="cursor-pointer fill-blue w-30px"
            />
          ) : (
            <Edit
              onMouseEnter={() => setActive("edit")}
              onClick={() => setEdit(true)}
              className="cursor-pointer fill-gray08 w-30px"
            />
          )}
          {active === "delete" ? (
            <DeleteFilled
              onMouseLeave={() => setActive("")}
              className="cursor-pointer fill-blue w-30px"
            />
          ) : (
            <Delete
              onMouseEnter={() => setActive("delete")}
              className="cursor-pointer fill-gray08 w-30px"
            />
          )}
        </div>
      </div>
      <div className="p-5 mb-5">{item.description}</div>
      <div className="d-flex justify-content-between text-muted ">
        <div
          onClick={() => history.push(`/orders/${item.owner.id}`)}
          className="cursor-pointer"
        >
          {item.owner.name}
        </div>
        <div>{item.date}</div>
      </div>
    </div>
  );
};
export default TodoItem;
