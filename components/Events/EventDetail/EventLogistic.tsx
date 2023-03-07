import React, { FC } from "react";

import DateIcon from "../../Icons/date-icon";
import AddressIcon from "../../Icons/address-icon";

import classes from "./EventLogistic.module.css";

interface EventLogisticProps {
  image: string;
  title: string;
  date: string;
  location: string;
}

const EventLogistic: FC<EventLogisticProps> = ({
  image,
  title,
  date,
  location,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <span className={classes.icon} data-testid="date-icon">
            <DateIcon />
          </span>
          <span className={classes.content}>{humanReadableDate}</span>
        </li>
        <li className={classes.item}>
          <span className={classes.icon} data-testid="address-icon">
            <AddressIcon />
          </span>
          <span className={classes.content}>{formattedAddress}</span>
        </li>
      </ul>
    </section>
  );
};

export default EventLogistic;
