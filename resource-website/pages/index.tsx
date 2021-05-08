import styles from "../styles/Home.module.css";
import { CardGrid } from "./cardGrid";

const events = [
  {
    title: "Veterans Victory Lap 5k - Virtual",
    date: "04/19 - 05/09",
    location: "Virtual",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-783944de-0178-4b600daf-00000afbdemobedework%40mysite.edu"
    ),
  },
  {
    title: "Spring Hooding and Recognition Ceremony",
    date: "Saturday, May 08, 2021",
    location: "Cameron Indoor Stadium",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-788b98aa-0178-ad86b8ae-0000417cdemobedework%40mysite.edu"
    ),
  },
  {
    title: "Men's Tennis vs South Florida (NCAA Championships)",
    date: "Saturday, May 08, 2021",
    location: "Gainesville, FL",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-7937c241-0179-3e597072-000019cbdemobedework%40mysite.edu"
    ),
  },
  {
    title: "Zakir Hussain & Masters of Percussions",
    date: "Saturday, May 08, 2021",
    location: "Online",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-7937c241-0179-3e597072-000019cbdemobedework%40mysite.edu"
    ),
  },
  {
    title: "[Online] University Worship",
    date: "Sunday, May 09, 2021",
    location: "The Rev. Bruce Puckett, Assistant Dean, Duke University Chapel",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-74d80914-0174-e0fb908e-00004c6fdemobedework%40mysite.edu_20210509T150000Z"
    ),
  },
  {
    title: "Women's Soccer vs Florida State NCAA Tournament Quarterfinals",
    date: "Sunday, May 09, 2021",
    location: "Cary, NC",
    link: new URL(
      "http://calendar.duke.edu/show?fq=id%3ACAL-2c918084-7937c241-0179-3e534f16-00001795demobedework%40mysite.edu"
    ),
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ListSpam!</h1>
        <br></br>
        <CardGrid events={events} />
      </main>
    </div>
  );
}
