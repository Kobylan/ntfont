import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Icon from "../../components/Icon";

const testData = [
  {
    id: 1,
    title: "Ubi est secundus competition? ",
    customer: "Nuris",
    deadline: 1595012196,
  },
  {
    id: 2,
    title: "Special shames facilitates most tantras. ",
    customer: "Nuris",
    deadline: 1594950996,
  },
  {
    id: 3,
    title: "Cannibals grow with greed! ",
    customer: "Adil Kairolla",
    deadline: 1595030196,
  },
  {
    id: 5,
    title: "Resistance, shield, and understanding. . ",
    customer: "Nuris Kairolla",
    deadline: 1594770996,
  },
  {
    id: 6,
    title: "The spirit develops.",
    customer: "Kairolla",
    deadline: 1594695396,
  },
  {
    id: 7,
    title: "Nosily deserve a girl.",
    customer: "Adil Kairolla",
    deadline: 1595138196,
  },
  {
    id: 8,
    title: "With squids drink tabasco. ",
    customer: "Kobylan",
    deadline: 1595163396,
  },
  {
    id: 9,
    title: "With herrings drink adobo sauce.",
    customer: "Adil Kobylan",
    deadline: 1595181396,
  },
  {
    id: 14,
    title: "With herrings drink adobo sauce.",
    customer: "Adil Kobylan",
    deadline: 1595181396,
  },
  {
    id: 15,
    title: "With herrings drink adobo sauce.",
    customer: "Adil Kobylan",
    deadline: 1595181396,
  },
  {
    id: 16,
    title: "With herrings drink adobo sauce.",
    customer: "Adil Kobylan",
    deadline: 1595181396,
  },
  {
    id: 10,
    title: "With shrimps drink tea.",
    customer: "Kobylan Kairolla",
    deadline: 1595267796,
  },
  {
    id: 11,
    title: "Imber germanus lactea est.",
    customer: "Kobylan",
    deadline: 1595210196,
  },
  {
    id: 12,
    title: "With truffels drink cocktail sauce.",
    customer: "Adil Kairolla",
    deadline: 1595249796,
  },
  {
    id: 13,
    title: "Finally control a planet. ",
    customer: "Adil Kairolla",
    deadline: 1595336196,
  },
];

const TodoList = () => {
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
    let unixToDateInData = Array.from(testData, (e) => ({
      ...e,
      deadline: new Date(e.deadline * 1000).toLocaleDateString(),
    }));
    let a = []; //return data only for chosen day
    unixToDateInData.map((e) => e.deadline === day && a.push(e));
    return a;
  };
  return (
    <div className="w-100 bg-white rounded mv-20 max-width-990px">
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
        {currentWeekData.map((e, i) => (
          <div>
            <TodoItem day={e} data={todoForDay(e)} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
