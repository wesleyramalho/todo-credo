import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Todo App", () => {
  test("Adding an item", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new item");
    const button = screen.getByText("Add");

    await userEvent.type(input, "Study React");
    fireEvent.click(button);

    expect(screen.getByText("Study React")).toBeInTheDocument();
  });

  test("Marking as done", async () => {
    render(<App />);

    await userEvent.type(
      screen.getByPlaceholderText("Add a new item"),
      "Drink water"
    );
    fireEvent.click(screen.getByText("Add"));

    const checkbox = screen.getByRole("checkbox", {
      name: /mark "Drink water" as/i,
    });
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("Removing item", async () => {
    render(<App />);

    await userEvent.type(
      screen.getByPlaceholderText("Add a new item"),
      "Drink water"
    );
    fireEvent.click(screen.getByText("Add"));

    const removeButton = screen.getByRole("button", {
      name: /Remove Drink water/i,
    });
    fireEvent.click(removeButton);

    expect(screen.queryByText("Drink water")).not.toBeInTheDocument();
  });
});
