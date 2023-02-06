import { FC } from "react";
import { useRouter } from "next/router";

import { getEventById } from "@/dummy-data";

import EventSummary from "@/components/Events/EventDetail/EventSummary";
import EventLogistic from "@/components/Events/EventDetail/EventLogistic";
import EventContent from "@/components/Events/EventDetail/EventContent";
import ErrorAlert from "@/components/Ui/ErrorAlert";

const EventDetailPage: FC = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Event not found</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic
        location={event.location}
        date={event.date}
        image={event.image}
        title={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};
export default EventDetailPage;
