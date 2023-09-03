import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task3 from "../../3";

test("adding new todo with title and description", () => {
  render(<Task3 />);

  // Get the title and description input fields
  const titleInput = screen.getByLabelText("Title");
  const descriptionInput = screen.getByLabelText("Description");

  fireEvent.change(titleInput, { target: { value: "Test Title" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  // Check if the new todo is displayed in the table component
  const todoRow = screen.getByText("Test Title");
  expect(todoRow).toBeInTheDocument();
});
