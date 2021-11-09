import React from "react";
import { AppProvider } from "../context/index";
import { HashRouter, Switch, Route } from "react-router-dom";

import "../global.css";

import Login from "../pages/Login";
import Loader from "./Loader";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PasswordReset from "../pages/PasswordReset";
import Layout from "./Layout";
import NotRegisterUser from "../pages/NotRegisterUser";
import HandBooks from "../pages/HandBooks";
import WorkOrder from "../pages/WorkOrder";
import Calendar from "../pages/Calendar";
import Help from "../pages/Help";
import Binnacle from "../pages/Binnacle";
import Documents from "../pages/Documents";
import Profile from "../pages/Profile";
import Passwords from "../pages/Passwords";

import { AppContext } from "../context";

function App() {
  return (
    <HashRouter>
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
                  <Route
                    exact
                    path="/WorkOrder"
                    render={(props) => <WorkOrder {...props} />}
                  />
                  <Route
                    exact
                    path="/Calendar"
                    render={(props) => <Calendar {...props} />}
                  />
                  <Route
                    exact
                    path="/Help"
                    render={(props) => <Help {...props} />}
                  />
                  <Route
                    exact
                    path="/Binnacle"
                    render={(props) => <Binnacle {...props} />}
                  />
                  <Route
                    exact
                    path="/Documents"
                    render={(props) => <Documents {...props} />}
                  />
                  <Route
                    exact
                    path="/Passwords"
                    render={(props) => <Passwords {...props} />}
                  />
                  <Route
                    exact
                    path="/Profile"
                    render={(props) => <Profile {...props} />}
                  />
                  {loader ? (
                    <Route
                      exact
                      path="/loader"
                      render={(props) => <Loader {...props} />}
                    />
                  ) : (
                    <Route component={NotFound} />
                  )}
                </Switch>
              ) : (
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => <Login {...props} />}
                  />
                  <Route exact path="/Register" component={Register} />
                  <Route
                    exact
                    path="/password/reset"
                    render={(props) => <PasswordReset {...props} />}
                  />
                  {loader ? (
                    <Route
                      exact
                      path="/loader"
                      render={(props) => <Loader {...props} />}
                    />
                  ) : (
                    <Route render={(props) => <NotRegisterUser {...props} />} />
                  )}
                </Switch>
              )
            }
          </AppContext.Consumer>
        </Layout>
      </AppProvider>
    </HashRouter>
  );
}

export default App;