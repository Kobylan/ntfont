import React, { lazy, Suspense } from "react";
import { history } from "./history";
import Sidebar from "./store/components/Sidebar";
import { Route, Router, Switch } from "react-router-dom";
import Loading from "./store/components/Loading";

const AppRouter = () => {
  const FindOrder = lazy(() => import("./pages/Cooker/FindOrders/FindOrder"));
  return (
    <Router history={history}>
      <header>
        <Sidebar />
      </header>
      <main>
        <div className="main-container">
          <div className="main-content">
            <Suspense fallback={Loading}>
              <Switch>
                <Route path={"/find-order"}>
                  <FindOrder />
                </Route>
              </Switch>
            </Suspense>
            {/*<FindOrder />*/}
            {/*<div className="right-side">somecontent</div>*/}
          </div>
          <div className="right-side">somecontent</div>
        </div>
      </main>
    </Router>
  );
};

export default AppRouter;
