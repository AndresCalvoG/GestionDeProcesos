import React from "react";
import { AppProvider } from "../context/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../global.css";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PasswordReset from "../pages/PasswordReset";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Home" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/password/reset"
              render={(props) => <PasswordReset {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
