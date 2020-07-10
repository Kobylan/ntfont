import React, { useState } from "react";
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
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonthDaysNumber, setCurrentMonthDaysNumber] = useState(
    new Date(currentYear, currentMonth, 0).getDate()
  );
  console.log(new Date(currentYear, currentMonth, 0).getDate());

  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    new Date(currentYear, currentMonth, 1).getDay()
  );

  let weekdayshortname = dayNames.map((day) => {
    return (
      <th
        key={day}
        className="text-dark text-align-center
       font-size-20"
      >
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
    let cd = d == day ? "bg-blue rounded" : "";
    daysInMonth.push(
      <td key={d} className={`text-dark font-size-20 text-align-center ${cd}`}>
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
    return <tr>{d}</tr>;
  });

  const prevMonth = () => {
    currentMonth === 0
      ? setCurrentMonth(11)
      : setCurrentMonth(currentMonth - 1);
    currentMonth === 0
      ? setCurrentYear(currentYear - 1)
      : setCurrentYear(currentYear);

    setFirstDayOfMonth(
      new Date(
        currentYear,
        currentMonth == 0 ? 11 : currentMonth - 1,
        1
      ).getDay()
    );
    setCurrentMonthDaysNumber(
      32 - new Date(currentYear, currentMonth - 1, 32).getDate()
    );
  };
  const nextMonth = () => {
    currentMonth === 11
      ? setCurrentMonth(0)
      : setCurrentMonth(currentMonth + 1);
    currentMonth === 11
      ? setCurrentYear(currentYear + 1)
      : setCurrentYear(currentYear);
    setFirstDayOfMonth(new Date(currentYear, currentMonth + 1, 1).getDay());
    setCurrentMonthDaysNumber(
      32 -
        new Date(
          currentYear,
          currentMonth == 11 ? 0 : currentMonth + 1,
          32
        ).getDate()
    );
  };
  return (
    <div className="d-flex flex-column h-100">
      <div>
        <div className="text-white w-100 mb-5 font-size-20 mt-20">
          Мои список дел
        </div>
        {testData.map((item) => (
          <div
            className={`bg-white w-100 br p-10 mb-5 d-flex border-box rounded ${
              item.status && `text-through`
            }`}
          >
            <div className={`checkbox-${item.status}`} />
            <div className="ml-5 text-uppercase ">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 w-100 rounded cursor-select border-box">
        <div className="pl-20 pr-20 d-flex justify-content-between font-size-20">
          <div>
            <Back
              className="fill-dark w-30px cursor-pointer"
              onClick={(e) => prevMonth()}
            />
          </div>
          <div>
            <span>{monthNames[currentMonth]}</span> <span>{currentYear}</span>
          </div>
          <div c>
            <Back
              className="fill-dark w-30px cursor-pointer transform-rotate-180"
              onClick={(e) => nextMonth()}
            />
          </div>
        </div>
        <div>
          <table className="w-100 h-300px">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
      </div>
      <footer className="text-white mt-15 w-100 text-align-center">
        <a> Условия</a>
        <a> Политика конфиденциальности</a>
        <a> Файлы cookie</a>
        <a> Информация о рекламе</a>
        <a> © NaTeste, Inc., 2020</a>© Twitter, Inc., 2020
      </footer>
    </div>
  );
};

export default RightSideContent;
