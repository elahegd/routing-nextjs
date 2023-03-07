import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorAlert from "@/components/Ui/ErrorAlert";
import Button from "@/components/Ui/Button";
import ResultTitle from "@/components/Events/ResultTitle";
import EventList from "@/components/Events/EventList";
import FilterEventPage from "./[...slug]";

jest.mock("@/dummy-data", () => ({
  getFilteredEvents: jest.fn(() => [{ id: 1, title: "title" }]),
}));

describe("FilterEventPage", () => {
  it("renders loading message correctly", () => {
    jest.mock("next/router", () => ({
      useRouter: jest.fn().mockImplementation(() => ({
        route: "/events/[slug]",
        pathname: "/events/123",
        query: { id: [] },
      })),
    }));
    const { getByText } = render(<FilterEventPage />);
    expect(getByText("Loading ....")).toBeInTheDocument();
    expect(getByText("Back to events")).toBeInTheDocument();
  });

  //   it("renders error message correctly when filter is failed", () => {
  //     const { getByText } = render(<FilterEventPage />, {
  //       route: "/events/[slug]",
  //       pathname: "/events/[slug]",
  //       query: { slug: ["2022", "13"] },
  //     });
  //     expect(getByText("Filter is failed")).toBeInTheDocument();
  //     expect(getByText("Back to events")).toBeInTheDocument();
  //   });

  //   it("renders error message correctly when no events found", () => {
  //     jest.resetAllMocks();
  //     getFilteredEvents.mockImplementation(() => []);
  //     const { getByText } = render(<FilterEventPage />, {
  //       route: "/events/[slug]",
  //       pathname: "/events/[slug]",
  //       query: { slug: ["2022", "1"] },
  //     });
  //     expect(
  //       getByText("No events found for the chosen filter")
  //     ).toBeInTheDocument();
  //     expect(getByText("Back to events")).toBeInTheDocument();
  //   });

  //   it("renders result title and event list correctly", () => {
  //     const { getByText } = render(<FilterEventPage />, {
  //       route: "/events/[slug]",
  //       pathname: "/events/[slug]",
  //       query: { slug: ["2022", "1"] },
  //     });
  //     expect(getByText("title")).toBeInTheDocument();
  //     expect(ResultTitle).toHaveBeenCalledWith({ date: new Date(2022, 0) }, {});
  //     expect(EventList).toHaveBeenCalledWith(
  //       { items: [{ id: 1, title: "title" }] },
  //       {}
  //     );
  //   });

  //   it("matches snapshot", () => {
  //     const { container } = render(<FilterEventPage />, {
  //       route: "/events/[slug]",
  //       pathname: "/events/[slug]",
  //       query: { slug: ["2022", "1"] },
  //     });
  //     expect(container).toMatchSnapshot();
  //   });
});
