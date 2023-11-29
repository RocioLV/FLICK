import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("Home", () => {
  it("should render Home", () => {
    render(<Home />);
    screen.debug();
  });
});