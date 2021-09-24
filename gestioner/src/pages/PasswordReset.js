import React from "react";

import { AppContext } from "../context";

function PasswordReset() {
  return (
    <>
      <AppContext.Consumer>
        {({ name }) => (
          <main className="mainReset">
            <h1>password</h1>
          </main>
        )}
      </AppContext.Consumer>
    </>
  );
}

export default PasswordReset;
