import React, { FC } from "react";
import Link from "next/link";

import classes from "./Button.module.css";

interface ButtonProps {
  link?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
