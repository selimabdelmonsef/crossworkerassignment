import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task2 from "../../2";

test("searching in table", () => {
  render(<Task2 />);

  const searchInput = screen.getByPlaceholderText(
    "Search here..."
  ) as HTMLInputElement;

  // Simulate typing a search query
  fireEvent.change(searchInput, { target: { value: "Hello everyone" } });
  const inputValue = searchInput.value;
  expect(inputValue).toContain("Selim");
});
