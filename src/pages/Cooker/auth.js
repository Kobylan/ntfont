import React, { useState } from "react";
import axios from "axios";

export const Auth = () => {
  const [auth, setAuth] = useState({
    number: "87077100499",
    password: "nurislam",
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
          axios.post("https://nateste.herokuapp.com/api/login", {
            number: auth.number,
            password: auth.password,
          });
        }}
      >
        Sign in
      </button>
    </div>
  );
};
