import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Routes = () => {
  const FindOrder = lazy(() => import("./pages/FindOrders"));
  const Profile = lazy(() => import("./pages/Profile"));
  const MyOrders = lazy(() => import("./pages/MyOrders"));
  const Chat = lazy(() => import("./pages/Chat"));
  const TodoList = lazy(() => import("./pages/TodoList"));
  const Auth = lazy(() => import("./pages/Auth"));
  const loggedIn = useSelector((store) => store.loggedIn.loggedIn);

  return (
    <Suspense fallback={""}>
      <Switch>
        <Route path={"/auth"}>
          {loggedIn ? <Redirect to={"/orders"} /> : <Auth />}
        </Route>
        {loggedIn ? (
          <>
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
          </>
        ) : (
          <Redirect to="/auth" />
        )}
      </Switch>
    </Suspense>
  );
};

export default Routes;
