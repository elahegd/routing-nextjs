import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Render and check props", () => {
  it("If button has link and children props", () => {
    const { asFragment } = render(<Button link="/">hey</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("If button has onClick and children props", () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<Button onClick={handleClick}>hey</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
