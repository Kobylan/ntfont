import React, { useState } from "react";
import Icon from "../../components/Icon";
import { useDispatch } from "react-redux";
const Auth = () => {
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  return (
    <div
      className="w-100 h-100 overflow-hidden"
      style={{
        background:
          "50% 50% / cover no-repeat url(https://images.unsplash.com/photo-1536614984430-64652c3ad956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
      }}
    >
      <div
        className="w-100 h-100 d-flex justify-content-center"
        // style={{
        //   background:
        //     "50% 50% / cover no-repeat url(data:image/png;base64,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)",
        // }}
        style={{
          backgroundColor: " rgb(0,0,0)",
          background:
            "radial-gradient(circle, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.15) 100%)",
        }}
      >
        <div
          className="d-flex align-items-center flex-column position-absolute"
          style={{
            top: "35%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div style={{ left: "0", right: "0" }}>
            <Icon name="logo" width={180} className="m-10" />
          </div>
          {status === 0 && (
            <div className="d-flex align-items-center flex-column">
              <div className="text-align-center text-white">
                The queen warps moon like a ship-wide starship.
                <br />
                Anomaly at the holodeck that is when interstellar admirals fly.
                <br />
                Crewmates meet from loves like neutral captains.
              </div>
              <div className="d-flex mt-50">
                <div
                  className="bg-white rounded text-align-center p-5 mr-20"
                  onClick={() => setStatus(1)}
                >
                  Взять заказ
                </div>
                <div
                  className="bg-white rounded text-align-center p-5 ml-20"
                  onClick={() => setStatus(2)}
                >
                  Заказать торт
                </div>
              </div>
            </div>
          )}
          {status === 1 && (
            <form
              className="d-flex flex-column align-items-center "
              action="https://thawing-reef-32246.herokuapp.com/admin/login/?next=/admin/"
              method="post"
            >
              <input
                className="w-275px h-30px rounded"
                type="text"
                placeholder="Имя пользователя или номер"
                name="username"
                required
              />
              <input
                className="mb-10 w-275px h-30px rounded"
                type="password"
                placeholder="Пароль"
                name="password"
                required
              />
              <div className="d-flex justify-content-between w-275px">
                <div className="text-white cursor-pointer" type="asd">
                  Забыли пароль?
                </div>
                <button
                  style={{ width: "fit-content" }}
                  type="submit"
                  onClick={() =>
                    dispatch({
                      type: "SET_LOGGED_IN_TRUE",
                    })
                  }
                >
                  Войти
                </button>
              </div>
            </form>
          )}
        </div>
        <div
          className="text-align-center text-white position-absolute cursor-pointer"
          style={{ bottom: "0", marginBottom: "50px" }}
        >
          Как это работает?
        </div>
      </div>
    </div>
  );
};

export default Auth;
