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
    <div className="todo-item-body ">
      <div className="d-flex ">
        <div>
          <div
            className={`todo-item__${status} pointer`}
            onClick={(e) => setStatus(!status)}
          />
        </div>
        <div className={`todo-list-content ${status && `line-through`}`}>
          <div className="d-flex justify-content-between ">
            <div className="todo-item-title h5 text-uppercase th">
              {item.title}
            </div>
            <div>
              {active === "edit" ? (
                <EditFilled
                  onMouseLeave={() => setActive("")}
                  onClick={() => setEdit(true)}
                  className="todo-item-icon pointer"
                />
              ) : (
                <Edit
                  onMouseEnter={() => setActive("edit")}
                  onClick={() => setEdit(true)}
                  className="todo-item-icon pointer"
                />
              )}
              {active === "delete" ? (
                <DeleteFilled
                  onMouseLeave={() => setActive("")}
                  className="todo-item-icon pointer"
                />
              ) : (
                <Delete
                  onMouseEnter={() => setActive("delete")}
                  className="todo-item-icon pointer"
                />
              )}
            </div>
          </div>

          <div>{item.description}</div>
        </div>
      </div>
      <div className="d-flex justify-content-between text-muted ">
        <div
          onClick={() => history.push(`/orders/${item.owner.id}`)}
          className="pointer"
        >
          {item.owner.name}
        </div>
        <div>{item.date}</div>
      </div>
    </div>
  );
};
export default TodoItem;
