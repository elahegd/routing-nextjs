import { FC } from "react";

import EventList from "@/components/Events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage: FC = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
