import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventContent from "./EventContent";

describe("EventContent", () => {
  it("renders children correctly", () => {
    const content = "Test Content";
    const { getByText } = render(<EventContent>{content}</EventContent>);
    const contentElement = getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  it("has correct class name", () => {
    const content = "Test Content";
    const { container } = render(<EventContent>{content}</EventContent>);
    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass("content");
  });

  it("matches snapshot", () => {
    const content = "Test Content";
    const { container } = render(<EventContent>{content}</EventContent>);
    expect(container).toMatchSnapshot();
  });
});
