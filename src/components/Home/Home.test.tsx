import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Welcome";

describe("Home", () => {
  it("renders the welcome message and navigation button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText("The best animations are just a click away!")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /watch all animations/i })
    ).toHaveAttribute("href", "/movies");
  });
});