import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reviews from "school-landing-page/pages/Reviews";

test("Reviews", () => {
  render(<Reviews />);

  const box = screen.getByTestId("box");
  const text = screen.getByText(/Say About Us/i);

  expect(text).toBeInTheDocument();
  expect(box).toHaveStyle({ scrollSnapType: "x mandatory" });
});
