import React from "react";
import { AppProvider } from "../context/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../global.css";

import Login from "../pages/Login";
import Loader from "./Loader"
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PasswordReset from "../pages/PasswordReset";
import Layout from "./Layout";
import NotRegisterUser from "../pages/NotRegisterUser";
import HandBooks from "../pages/HandBooks";

import { AppContext } from "../context";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <AppContext.Consumer>
            {({ auth, loader }) =>
              auth ? (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Login {...props} />}
                  />
                  <Route exact path="/Register" component={Register} />
                  <Route
                    exact
                    path="/Home"
                    render={(props) => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/password/reset"
                    render={(props) => <PasswordReset {...props} />}
                  />
                  <Route
                    exact
                    path="/Manuals"
                    render={(props) => <HandBooks {...props} />}
                  />
                  <Route component={NotFound} />
                </Switch>
              ) : (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Login {...props} />}
                  />
                  <Route exact path="/Register" component={Register} />
                  {!loader?( 
                    <Route
                      exact
                      path="/Home"
                      render={(props) => <NotRegisterUser {...props} />}
                    />):(
                      <Route
                      exact
                      path="/Home"
                      render={(props) => <Loader {...props} />}
                    />
                  )}
                  <Route
                    exact
                    path="/password/reset"
                    render={(props) => <PasswordReset {...props} />}
                  />
                  <Route component={NotFound} />
                </Switch>
              )
            }
          </AppContext.Consumer>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
