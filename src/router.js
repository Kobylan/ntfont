import React, { lazy, Suspense } from "react";
import { history } from "./history";
import Sidebar from "./store/components/Sidebar";
import { Route, Router, Switch } from "react-router-dom";
import Loading from "./store/components/Loading";
import { Auth } from "./pages/Cooker/auth";

const AppRouter = () => {
  const FindOrder = lazy(() => import("./pages/Cooker/FindOrders/FindOrder"));
  const Profile = lazy(() => import("./pages/Cooker/Profile/Profile"));
  const Orders = lazy(() => import("./pages/Cooker/Orders/Orders"));
  const Chat = lazy(() => import("./pages/Cooker/Orders/Chat/Chat"));

  return (
    <Router history={history}>
      <header>
        <Sidebar />
      </header>
      <main>
        <div className="main-container">
          <div className="main-content">
            <Suspense fallback={""}>
              <Switch>
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
                <Route path={"/auth"}>
                  <Auth />
                </Route>
              </Switch>
            </Suspense>
          </div>
          <div className="right-side-container">
            <div className="right-side-content">
              <div className="right-side">123</div>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default AppRouter;
