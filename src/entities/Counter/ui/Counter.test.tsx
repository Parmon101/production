import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { componentRender } from "shared/lib/tests/componentsRender/componentsRender";
import { Counter } from "entities/Counter";
import { userEvent } from "@storybook/testing-library";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
