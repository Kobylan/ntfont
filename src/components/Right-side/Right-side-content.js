import React, { useState } from "react";
import Calendar from "./Calendar";
import RightSideTodo from "./Right-side-todo";
import Footer from "./Footer";
import useTodo from "../../hooks/useTodo";
import Loading from "../Loading";

const RightSideContent = () => {
  const [page, setPage] = useState(1);
  const { loading, error, todo, hasMore } = useTodo(page);
  return (
    <div className="d-flex flex-column h-100">
      <Calendar />
      {todo && <RightSideTodo todos={todo} />}
      {loading && <Loading />}
      {error && (
        <div className="text-white text-align-center m-20">Ошибка!</div>
      )}
      {!loading && !error && todo.length === 0 && (
        <div className="text-white text-align-center m-20">Заказов нет</div>
      )}
      <Footer />
    </div>
  );
};

export default RightSideContent;
