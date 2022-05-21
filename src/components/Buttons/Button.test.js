import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Render content", () => {
  const type = "button--long submit";
  const action = function () {
    console.log("paso");
  };
  const name = "Login";

  const component = render(<Button name={name} class={type} action={action} />);
  console.log(component);
});
