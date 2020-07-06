import React, { useState } from "react";
import "../assets/css/right-side-content.css";
import "../assets/css/todo-list.css";
import "../assets/css/chat.css";
import { ReactComponent as Back } from "../assets/icons/chat/back.svg";
import { history } from "../history";
let monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const testData = [
  {
    id: 1,
    title: "Хочу пицу в форме сердца",
    status: true,
  },
  {
    id: 2,
    title: "Торт малочная девочка",
    status: true,
  },
  {
    id: 3,
    title: "Дамские пальчики",
    status: false,
  },
];

const RightSideContent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentMonthDaysNumber, setCurrentMonthDaysNumber] = useState(
    32 - new Date(new Date().getFullYear(), currentMonth, 32).getDate()
  );
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    new Date(new Date().getFullYear(), currentMonth, 1).getDay()
  );
  console.log(currentMonth, firstDayOfMonth, currentMonthDaysNumber);

  let weekdayshortname = dayNames.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });
  let blanks = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(<td />);
  }
  let day = new Date().getMonth() == currentMonth ? new Date().getDate() : null;
  let daysInMonth = [];
  for (let d = 1; d <= currentMonthDaysNumber; d++) {
    let cd = d == day ? "today" : "";
    daysInMonth.push(
      <td key={d} className={`calendar-day ${cd}`}>
        {d}
      </td>
    );
  }

  let totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });
  let daysinmonth = rows.map((d, i) => {
    return <tr className="calendar-day">{d}</tr>;
  });
  console.log(daysInMonth);

  const prevMonth = () => {
    currentMonth == 0 ? setCurrentMonth(11) : setCurrentMonth(currentMonth - 1);

    setFirstDayOfMonth(
      new Date(
        new Date().getFullYear(),
        currentMonth == 0 ? 11 : currentMonth - 1,
        1
      ).getDay()
    );
    setCurrentMonthDaysNumber(
      32 - new Date(new Date().getFullYear(), currentMonth - 1, 32).getDate()
    );
  };
  const nextMonth = () => {
    currentMonth == 11 ? setCurrentMonth(0) : setCurrentMonth(currentMonth + 1);
    setFirstDayOfMonth(
      new Date(new Date().getFullYear(), currentMonth + 1, 1).getDay()
    );
    setCurrentMonthDaysNumber(
      32 -
        new Date(
          new Date().getFullYear(),
          currentMonth == 11 ? 0 : currentMonth + 1,
          32
        ).getDate()
    );
  };
  return (
    <div className="right-side-content ">
      <div>
        <div className="card-title">Мои список дел</div>
        {testData.map((item) => (
          <div
            className={`right-side-todolist-item   ${
              item.status && `line-through`
            }`}
          >
            <div className={`todo-item__${item.status} mr-10`} />
            <div className="todo-item-title  text-uppercase th">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="right-side-calendar">
        <div className="calendar-header">
          <div className="">
            <Back className="chat__icon pointer" onClick={(e) => prevMonth()} />
          </div>
          <div className="column col-center">
            <span>{monthNames[currentMonth]}</span>
          </div>
          <div className="column col-end">
            <Back
              className="chat__icon pointer rotate180deg"
              onClick={(e) => nextMonth()}
            />
          </div>
        </div>
        <div>
          <table className="calendar-body">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RightSideContent;
