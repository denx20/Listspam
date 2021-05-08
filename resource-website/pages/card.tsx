import React from "react";
import styles from "../styles/Home.module.css";

export const Card: React.FC<event_info> = (event) => (
  <a className={styles.card} href={event.link.toString()}>
    <h2>{event.title}</h2>
    <p>Date: {event.date}</p>
    <p>Location: {event.location}</p>
  </a>
);
