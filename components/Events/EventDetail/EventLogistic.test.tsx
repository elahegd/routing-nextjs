import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EventLogistic from "./EventLogistic";

describe("EventLogistic", () => {
  const image = "test.jpg";
  const title = "Test Title";
  const date = "2023-02-07";
  const location = "Test Location, Test Country";
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  it("renders image correctly", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const imageElement = container.querySelector("img");
    expect(imageElement).toHaveAttribute("src", `/${image}`);
    expect(imageElement).toHaveAttribute("alt", title);
  });

  it("renders date correctly", () => {
    const { getByText } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const dateElement = getByText(humanReadableDate);
    expect(dateElement).toBeInTheDocument();
  });

  it("has correct class name for section element", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const sectionElement = container.querySelector("section");
    expect(sectionElement).toHaveClass("logistics");
  });

  it("has correct class name for image element", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const imageContainer = container.querySelector(`.image`);
    expect(imageContainer).toBeInTheDocument();
  });

  it("has correct class name for list element", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const listElement = container.querySelector(`.list`);
    expect(listElement).toBeInTheDocument();
  });

  it("has correct class name for item elements", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const itemElements = container.querySelectorAll(".item");
    expect(itemElements).toHaveLength(2);
  });
  it("has correct class name", () => {
    const { container } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const iconElement = container.querySelector("span");
    expect(iconElement).toHaveClass("icon");
  });
  it("renders DateIcon correctly", () => {
    const { getByTestId } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const iconElement = getByTestId("date-icon");
    expect(iconElement).toBeInTheDocument();
  });
  it("renders AddressIcon correctly", () => {
    const { getByTestId } = render(
      <EventLogistic
        image={image}
        title={title}
        date={date}
        location={location}
      />
    );
    const iconElement = getByTestId("address-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
