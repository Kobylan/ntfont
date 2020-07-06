import React, { useState } from "react";
import { history } from "../../../history";
import { ReactComponent as Save } from "../../../assets/icons/todo/save.svg";
import { ReactComponent as SaveFilled } from "../../../assets/icons/todo/save-filled.svg";
import { ReactComponent as Delete } from "../../../assets/icons/todo/delete.svg";
import { ReactComponent as DeleteFilled } from "../../../assets/icons/todo/delete-filled.svg";

const EditTodoItem = (props) => {
  const [item, setItem] = useState(props.item);
  const [status, setStatus] = useState(item.status);
  const [active, setActive] = useState("");
  const [rows, setRows] = useState(
    Math.ceil(item.description.length / 58) < 10
      ? Math.ceil(item.description.length / 58)
      : 10
  );
  const onChangeDescription = (event) => {
    const textareaLineHeight = 24;
    const minRows = 1;
    const maxRows = 10;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setItem({
      ...item,
      description: event.target.value,
    });
    setRows(currentRows < maxRows ? currentRows : maxRows);
  };
  return (
    <div className="todo-item-body ">
      <div className="d-flex justify-content-between">
        <div className="h5">Редактирование</div>
        <div>
          {active === "edit" ? (
            <SaveFilled
              onMouseLeave={() => setActive("")}
              className="todo-item-icon pointer"
              onClick={() => props.setEdit(false)}
            />
          ) : (
            <Save
              onMouseEnter={() => setActive("edit")}
              className="todo-item-icon pointer"
              onClick={() => props.setEdit(false)}
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
      <div className={`todo-list-content`}>
        <div>
          <div>Название</div>
          <input
            className="todo-item-title__edit mb-5 rounded"
            type="text"
            maxLength={55}
            value={item.title}
            onChange={(e) =>
              setItem({
                ...item,
                title: e.target.value,
              })
            }
          />
        </div>

        <div>Описание</div>
        <textarea
          value={item.description}
          className="todo-item-description__edit rounded"
          rows={rows}
          maxLength={255}
          onChange={onChangeDescription}
        />
      </div>
    </div>
  );
};
export default EditTodoItem;
