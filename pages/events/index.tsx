import { FC } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/Events/EventList";
import EventSearch from "@/components/Events/EventSearch";

const EventPage: FC = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  function handleSearch(year: string, month: string): void {
    const pathname = `/events/${year}/${month}`;
    router.push(pathname);
  }

  return (
    <div>
      <EventSearch onSearch={handleSearch} />
      <EventList items={allEvents} />
    </div>
  );
};

export default EventPage;
