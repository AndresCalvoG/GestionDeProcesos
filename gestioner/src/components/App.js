import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

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
        //console.log(data._delegate._document.data.value.mapValue.fields);
      }
      if (data.exists) {
        setUser(data._delegate._document.data.value.mapValue);
        setAuth(true);
      } else {
        //history.push(response);
      }
    })();
    // return () => {
    //     cleanup
    // };
  }, [check]);

  return (
    <BrowserRouter>
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
          render={(props) => (
            <Home {...props} auth={auth} user={user} setUser={setUser} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
