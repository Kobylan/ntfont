import React from "react";

import Calendar from "./Calendar";
import Todo from "./Todo";
import Footer from "./Footer";
import useTodo from "../../hooks/useTodo";
import Loader from "../../components/Loader";

const RightSidebar = () => {
  const { loading, error, todo } = useTodo();
  return (
    <div className="w-350px h-100">
      <div className="d-flex flex-column h-100">
        <Calendar />
        {todo && <Todo todos={todo} />}
        {loading && <Loader />}
        {error && (
          <div className="text-white text-align-center m-20">Ошибка!</div>
        )}
        {!loading && !error && todo.length === 0 && (
          <div className="text-white text-align-center m-20">Заказов нет</div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default RightSidebar;
