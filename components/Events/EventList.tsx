import React, { FC } from "react";
import EventItem from "./EventItem";

import { EventListType } from "./EventTypes";
import classes from "./EventList.module.css";

export interface EventListProps {
  items: EventListType;
}

const EventList: FC<EventListProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
