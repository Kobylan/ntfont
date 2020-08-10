import React from "react";

const Auth = () => {
  return (
    <div>
      <form
        action="https://thawing-reef-32246.herokuapp.com/admin/login/?next=/admin/"
        method="post"
      >
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
