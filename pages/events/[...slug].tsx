import { FC } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/Events/EventList";
import ErrorAlert from "@/components/Ui/ErrorAlert";
import Button from "@/components/Ui/Button";
import ResultTitle from "@/components/Events/ResultTitle";

const FilterEventPage: FC = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading ....</p>;
        </ErrorAlert>
        <Button link="/events">Back to events</Button>
      </>
    );
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // covert them to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">
        <ErrorAlert>
          <p className="center">Filter is failed</p>
        </ErrorAlert>
        <Button link="/events">Back to events</Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p className="center">No events found for the chosen filter</p>
        </ErrorAlert>
        <Button link="/events">Back to events</Button>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilterEventPage;
