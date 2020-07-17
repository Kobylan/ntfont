import React, { useState } from "react";
import { history } from "../../../history";
import { ReactComponent as Save } from "../../../assets/icons/todo/save.svg";
import { ReactComponent as SaveFilled } from "../../../assets/icons/todo/save-filled.svg";
import { ReactComponent as Delete } from "../../../assets/icons/todo/delete.svg";
import { ReactComponent as DeleteFilled } from "../../../assets/icons/todo/delete-filled.svg";

const EditTodoItem = (props) => {
  const [item, setItem] = useState(props.item);
  const [active, setActive] = useState("");
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <input
          className="w-350px bg-transparent border  outline-none p-5 rounded "
          type="text"
          name="email"
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />

        <div>
          {active === "edit" ? (
            <SaveFilled
              onMouseLeave={() => setActive("")}
              onClick={() => props.setEdit(false)}
              className="cursor-pointer fill-blue w-30px"
            />
          ) : (
            <Save
              onMouseEnter={() => setActive("edit")}
              onClick={() => props.setEdit(false)}
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
      <textarea
        rows={5}
        className="mt-5 bg-transparent border w-100 outline-none p-5 rounded "
        name="bio"
        value={item.description}
        onChange={(e) =>
          setItem({
            ...item,
            description: e.target.value,
          })
        }
      />
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

export default EditTodoItem;
