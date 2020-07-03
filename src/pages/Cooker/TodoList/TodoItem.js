import React from "react";
import { history } from "../../../history";
import { ReactComponent as Edit } from "../../../assets/icons/profile/edit.svg";
import { ReactComponent as EditFilled } from "../../../assets/icons/profile/edit-filled.svg";
import { ReactComponent as Delete } from "../../../assets/icons/todo/delete.svg";
import { ReactComponent as DeleteFilled } from "../../../assets/icons/todo/delete-filled.svg";

const TodoItem = (props) => {
  const { item } = props;
  const [status, setStatus] = React.useState(item.status);
  const [active, setActive] = React.useState("");
  return (
    <div className="todo-item-body ">
      <div className="d-flex ">
        <div className="p-1">
          <div
            className={`todo-item__${status} pointer`}
            onClick={(e) => setStatus(!status)}
          />
        </div>
        <div className={`p-1 ${status && `line-through`}`}>
          <div className="d-flex justify-content-between ">
            <div className="todo-item-title h5">{item.title}</div>
            <div>
              {active === "edit" ? (
                <EditFilled
                  onMouseLeave={() => setActive("")}
                  className="todo-item-icon pointer"
                />
              ) : (
                <Edit
                  onMouseEnter={() => setActive("edit")}
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
