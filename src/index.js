import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SocketProvider } from "./store/socket";

import "./index.css";
import Routes from "./routes";
import { history } from "./history";
import Layout from "./components/Layout";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <SocketProvider>
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </SocketProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
