import React, { lazy, Suspense } from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

const Routes = () => {
  const FindOrder = lazy(() => import("./pages/FindOrder"));
  const Profile = lazy(() => import("./pages/Profile"));
  const Orders = lazy(() => import("./pages/Orders"));
  const Chat = lazy(() => import("./pages/Chat"));
  const TodoList = lazy(() => import("./pages/Calendar"));

  return (
    <Suspense fallback={""}>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/orders"} />
        </Route>
        <Route path={"/find-order"}>
          <FindOrder />
        </Route>
        <Route path={"/profile"}>
          <Profile />
        </Route>
        <Route path={"/orders/:userID"}>
          <Chat />
        </Route>
        <Route exact path={"/orders"}>
          <Orders />
        </Route>
        <Route path={"/todo-list"}>
          <TodoList />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
