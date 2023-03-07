import React from "react";
import { render } from "@testing-library/react";

import EventItem from "./EventItem";
import { EventItemInterface } from "./EventTypes";

describe("Render and check props", () => {
  const mockEventitem: EventItemInterface = {
    id: "e3",
    title: "Networking for extroverts",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
  };

  it("Render component with exact props", () => {
    const { id, title, location, date, image } = mockEventitem;

    const { asFragment } = render(
      <EventItem
        id={id}
        title={title}
        location={location}
        date={date}
        image={image}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
