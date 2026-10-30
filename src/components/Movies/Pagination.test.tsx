
import { fireEvent, render, screen } from "@testing-library/react";
import PaginationComponent from "./Pagination";

describe("Movie pagination", () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows valid page numbers from page one", () => {
    render(
      <PaginationComponent
        currentPage={1}
        totalPages={20}
        onPageChange={onPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();

    expect(screen.queryByText("0")).not.toBeInTheDocument();
    expect(screen.queryByText("-1")).not.toBeInTheDocument();
  });

  it("changes to the selected page", () => {
    render(
      <PaginationComponent
        currentPage={1}
        totalPages={20}
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(screen.getByText("2"));

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("does not show pagination when there is only one page", () => {
    const { container } = render(
      <PaginationComponent
        currentPage={1}
        totalPages={1}
        onPageChange={onPageChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("does not show pages greater than the total", () => {
    render(
      <PaginationComponent
        currentPage={3}
        totalPages={3}
        onPageChange={onPageChange}
      />
    );

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });
});
