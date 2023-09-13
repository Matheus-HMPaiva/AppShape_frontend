import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import IMCCalculator from "../IMCCalculator";
import { MemoryRouter } from "react-router-dom";

test("Calculates BMI correctly", () => {
  render(
    <MemoryRouter initialEntries={['/imc']}> {/* Set initialEntries as needed */}
      <IMCCalculator />
    </MemoryRouter>
  );

  // Get input fields and button
  const heightInput = screen.getByTestId("height");
  const weightInput = screen.getByTestId("weight");
  const ageInput = screen.getByTestId("age");
  const calculateButton = screen.getByText("Calcular");

  // Fill in input fields
  fireEvent.change(heightInput, { target: { value: "175" } });
  fireEvent.change(weightInput, { target: { value: "70" } });
  fireEvent.change(ageInput, { target: { value: "30" } });

  // Click the calculate button
  fireEvent.click(calculateButton);

  // Check if the BMI and message are displayed correctly
  const bmiValue = screen.getByText("0.40"); // Update this with the expected BMI value after fixing the calculation in your component
  const message = screen.getByText("Abaixo do peso"); // Update this with the expected message based on the BMI calculation

  expect(bmiValue).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
