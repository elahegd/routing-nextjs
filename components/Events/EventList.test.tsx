import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import EventList from "./EventList";
import { getAllEvents } from "../../dummy-data";

describe("Render and check props", () => {
  it("If button has link and children props", () => {
    const { asFragment } = render(<EventList items={getAllEvents()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
