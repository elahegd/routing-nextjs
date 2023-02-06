import React, { FC } from "react";

import classes from "./EventContent.module.css";

interface EventContentProps {
  children: React.ReactNode;
}

const EventContent: FC<EventContentProps> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
