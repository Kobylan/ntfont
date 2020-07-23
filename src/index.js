import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import Routes from "./routes";
import { history } from "./history";
import Layout from "./components/Layout";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
