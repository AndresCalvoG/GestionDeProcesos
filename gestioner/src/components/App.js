import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../global.css";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PasswordReset from "../pages/PasswordReset";
import Layout from "./Layout";

import Auth from "../utils/autenticacion";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);

  useEffect(() => {
    (async function () {
      let data = {
        value: "0",
        exists: false,
      };
      const response = await Auth.validUser();
      if (response !== "/") {
        data = await Auth.getDataUser(response.uid);
      }
      if (data.exists) {
        setUser(data._delegate._document.data.value.mapValue);
        setAuth(true);
        console.log("reder true en appp");
      } else {
        setAuth(false);
        setUser({ value: false });
        console.log("render false en app");
      }
    })();
  }, [check]);

  return (
    <BrowserRouter>
      <Layout auth={auth} user={user}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} setCheck={setCheck} />}
          />
          <Route exact path="/Register" component={Register} />
          <Route
            exact
            path="/Home"
            render={(props) => <Home {...props} setCheck={setCheck} />}
          />
          <Route
            exact
            path="/password/reset"
            render={(props) => <PasswordReset {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
