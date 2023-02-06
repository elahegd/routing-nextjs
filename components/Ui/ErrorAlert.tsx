import React, { FC } from "react";

import classes from "./ErrorAlert.module.css";

interface ErrorAlertProps {
  children: React.ReactNode;
}
const ErrorAlert: FC<ErrorAlertProps> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};

export default ErrorAlert;
