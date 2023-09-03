import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Task1 from "../../1";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
import { isValidEmail } from "../../helpers/isValidEmail";

test("typing in the email field in Task1 component", () => {
  render(<Task1 />);

  // Find the input element by its label text
  const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
  fireEvent.change(emailInput, {
    target: { value: "selimabdelmonsef@gmail.com" },
  });

  // Check if the email is valid
  const isEmailValid = isValidEmail(emailInput.value);
  expect(isEmailValid).toBe(true);
});
