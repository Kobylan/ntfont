import React, { lazy, Suspense } from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";

const Routes = () => {
  const FindOrder = lazy(() => import("./pages/FindOrders"));
  const Profile = lazy(() => import("./pages/Profile"));
  const MyOrders = lazy(() => import("./pages/MyOrders"));
  const Chat = lazy(() => import("./pages/Chat"));
  const TodoList = lazy(() => import("./pages/TodoList"));

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
          <MyOrders />
        </Route>
        <Route path={"/todo-list"}>
          <TodoList />
        </Route>
        <Route path={"/chat"}>
          <Chat />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
