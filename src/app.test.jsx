import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";
afterEach(() => {
  cleanup();
});
test("renders the app component", () => {
  render(<App />);
  const headingElement = screen.getByText(/Code step by step/i);
  expect(headingElement).toBeInTheDocument();
});
