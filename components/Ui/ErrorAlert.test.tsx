import React from "react";
import { render } from "@testing-library/react";

import ErrorAlert from "./ErrorAlert";

describe("Render and check props", () => {
  it("Should render with children props", () => {
    const { asFragment } = render(<ErrorAlert>hey Alert</ErrorAlert>);

    expect(asFragment()).toMatchSnapshot();
  });
});
