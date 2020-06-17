import React, { useState } from "react";
import axios from "axios";

export const Auth = () => {
  const [auth, setAuth] = useState({
    number: "",
    password: "",
  });
  return (
    <div>
      <input
        value={auth.number}
        onChange={(e) => {
          setAuth({ ...auth, number: e.target.value });
        }}
      />
      <input
        value={auth.password}
        onChange={(e) => {
          setAuth({ ...auth, password: e.target.value });
        }}
      />
      <button
        onClick={(e) => {
          axios({
            method: "POST",
            url: "https://nateste.herokuapp.com/api/login",
            body: auth,
          });
        }}
      >
        qwe
      </button>
      "number": "87077100499", "password": "nurislam"
    </div>
  );
};
