import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Card } from "./card";

export const CardGrid: React.FC<event_list> = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState({ events });

  const filterEvents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredEvents({
      events: events.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  return (
    <div>
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search for an event"
          onChange={filterEvents}
        />
      </div>
      <div className={styles.grid}>
        {filteredEvents.events.map((event) => (
          <Card {...event} />
        ))}
      </div>
    </div>
  );
};
