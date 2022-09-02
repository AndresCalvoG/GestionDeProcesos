import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";
import { AppContext, AppProvider } from "../../context/index";
import { HashRouter } from "react-router-dom";
import Landing from "./Landing";

describe("UI testing", () => {
  test("renders content", () => {
    const component = render(
      <HashRouter>
        <AppProvider>
          <Landing />
        </AppProvider>
      </HashRouter>
    );
    //component.getByText("Ver Blog");
    //expect(component.container).toHaveTextContent("Ver Blog");
    //console.log(component);
    //*component.debug();//muestra el componente que esta renderizando
    const a = component.container.querySelector("a");
    console.log(prettyDOM(a));
  });

  test("Click to button", () => {
    const component = render(
      <HashRouter>
        <AppProvider>
          <Landing />
        </AppProvider>
      </HashRouter>
    );
    const button = component.getByText("Iniciar Sesion");
    fireEvent.click(button);
  });
});
