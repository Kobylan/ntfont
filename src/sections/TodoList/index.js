import React, { useState, useEffect } from "react";
import TodoItem from "../../components/TodoItem";
import Icon from "../../components/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../../store/actions/TodoList/TodoList";
import Skeleton from "../../components/Skeleton";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoList);
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  //current week to display on screen
  let currentWeekData = [];
  const fillCurrentWeek = () => {
    let curr = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      currentDate
    );
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toLocaleDateString();
      currentWeekData.push(day);
    }
  };
  fillCurrentWeek();
  //get todo's from data to specific day in week
  const todoForDay = (day) => {
    //unix in data to date
    let a = []; //return data only for chosen day
    todo.data.map((e) => e.deadline === day && a.push(e));
    return a;
  };

  return (
    <div>
      <div className="d-flex justify-content-between h-50px align-items-center pg-20">
        <div>
          <Icon
            name="back"
            className="fill-dark w-30px cursor-pointer hover-blue"
            onClick={() => setCurrentDate(currentDate - 7)}
          />
        </div>
        <div className="font-size-20">Мои заказы на эту неделю</div>
        <div>
          <Icon
            name="back"
            className="fill-dark w-30px cursor-pointer transform-rotate-180 hover-blue"
            onClick={() => setCurrentDate(currentDate + 7)}
          />
        </div>
      </div>
      <div className="d-flex flex-column border-grey">
        {todo.isFetching
          ? currentWeekData.map(() => (
              <Skeleton height={150} width="970" className="m-10" />
            ))
          : currentWeekData.map((element, i) => (
              <div>
                <TodoItem day={element} data={todoForDay(element)} index={i} />
              </div>
            ))}
      </div>
    </div>
  );
};
export default TodoList;
