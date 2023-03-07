import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventSummary from "./EventSummary";

describe("EventSummary", () => {
  it("renders title correctly", () => {
    const title = "Test Title";
    const { getByText } = render(<EventSummary title={title} />);
    const headerElement = getByText(title);
    expect(headerElement).toBeInTheDocument();
  });

  it("has correct class name", () => {
    const title = "Test Title";
    const { container } = render(<EventSummary title={title} />);
    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass("summary");
  });

  it("matches snapshot", () => {
    const title = "Test Title";
    const { asFragment } = render(<EventSummary title={title} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
