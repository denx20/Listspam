interface event_info {
  title: string;
  date: string;
  location: string;
  link: URL;
}

interface event_list {
  events: event_info[];
}

interface search {
  placeholder: string;
  handleChange: (event: any) => void;
}
