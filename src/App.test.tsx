import App from "./App.tsx";
import { test, expect, afterEach, describe } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

afterEach(() => {
  cleanup();
});

describe("App component tests", () => {
  test("renders App component", () => {
    render(<App />);
    const header = screen.getByText(/My Todolist/i);
    expect(header).toBeInTheDocument();
  });

  test("add todo", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "4.1.2025" } });

    const button = screen.getByText("Add");
    fireEvent.click(button);

    const table = screen.getByRole("table");
    expect(table).toHaveTextContent(/go to coffee/i);
  });

  test("clear todos", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "4.1.2025" } });

    const button = screen.getByText("Add");
    fireEvent.click(button);

    const clearButton = screen.getByText("Clear All Todos");
    fireEvent.click(clearButton);

    const table = screen.queryByRole("table");
    expect(table).not.toHaveTextContent(/go to coffee/i);
  });
});
