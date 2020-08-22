import React, { useState } from "react";
import Icon from "../../components/Icon";
import { useDispatch } from "react-redux";
import {checkAuth} from "../../store/actions/loggedIn/LoggedIn";
const Auth = () => {
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
      username:"",
      password:""
  })
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
            <div
              className="d-flex flex-column align-items-center"
            >
              <input
                className="w-275px h-30px rounded"
                type="text"
                placeholder="Имя пользователя или номер"
                name="username"
                value={credentials.username}
                onChange={(event)=>setCredentials({...credentials, username: event.target.value})}
                required
              />
              <input
                className="mb-10 w-275px h-30px rounded"
                type="password"
                placeholder="Пароль"
                name="password"
                value={credentials.password}
                onChange={(event)=>setCredentials({...credentials, password: event.target.value})}
                required
              />
              <div className="d-flex justify-content-between w-275px">
                <div className="text-white cursor-pointer" type="asd">
                  Забыли пароль?
                </div>
                <button
                  style={{ width: "fit-content" }}
                  type="submit"
                  onClick={() => {
                      fetch("/auth/login/",{
                          method:"POST",
                          body:JSON.stringify(credentials)
                      }).then(
                          resp => resp.JSON
                      ).then(()=> {
                              dispatch(checkAuth())
                          }
                      )
                  }
                  }
                >
                  Войти
                </button>
              </div>
            </div>
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
