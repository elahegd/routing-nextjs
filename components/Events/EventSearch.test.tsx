import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import EventSearch from "./EventSearch";

describe("EventSearch", () => {
  it("renders form correctly", () => {
    const { getByTestId, getByText } = render(
      <EventSearch onSearch={() => {}} />
    );
    const yearInput = getByTestId("year");
    const monthInput = getByTestId("month");
    const submitButton = getByText("Find Events");
    expect(yearInput).toBeInTheDocument();
    expect(monthInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("calls onSearch with correct values", () => {
    const onSearch = jest.fn();
    const { getByTestId, getByText } = render(
      <EventSearch onSearch={onSearch} />
    );
    const yearInput = getByTestId("year") as HTMLSelectElement;
    const monthInput = getByTestId("month") as HTMLSelectElement;
    const submitButton = getByText("Find Events");
    fireEvent.change(yearInput, { target: { value: "2022" } });
    fireEvent.change(monthInput, { target: { value: "2" } });
    fireEvent.click(submitButton);
    expect(onSearch).toHaveBeenCalledWith("2022", "2");
  });

  it("has correct class name", () => {
    const { container } = render(<EventSearch onSearch={() => {}} />);
    const formElement = container.querySelector("form");
    expect(formElement).toHaveClass("form");
  });

  it("matches snapshot", () => {
    const { container } = render(<EventSearch onSearch={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
