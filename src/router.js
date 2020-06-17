import React, { lazy, Suspense } from "react";
import { history } from "./history";
import Sidebar from "./store/components/Sidebar";
import { Route, Router, Switch } from "react-router-dom";
import Loading from "./store/components/Loading";
import { Auth } from "./pages/Cooker/auth";

const AppRouter = () => {
  const FindOrder = lazy(() => import("./pages/Cooker/FindOrders/FindOrder"));
  const Profile = lazy(() => import("./pages/Cooker/Profile/Profile"));

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
                <Route path={"/auth"}>
                  <Auth />
                </Route>
              </Switch>
            </Suspense>
            {/*<FindOrder />*/}
            {/*<div className="right-side">somecontent</div>*/}
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
