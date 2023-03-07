import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ResultTitle from "./ResultTitle";

describe("Render and check props", () => {
  it("If button has link and children props", () => {
    const mockDate = new Date("2022-01-01");
    const { asFragment } = render(<ResultTitle date={mockDate} />);

    expect(asFragment()).toMatchSnapshot();
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Events in January 2022");
  });

  it("Click on 'Show all events' link should redirect to /events page", () => {
    const mockDate = new Date("2022-01-01");
    render(<ResultTitle date={mockDate} />);

    const allEventsLink = screen.getByText("Show all events");
    fireEvent.click(allEventsLink);
    expect(allEventsLink.getAttribute("href")).toBe("/events");
  });
});
