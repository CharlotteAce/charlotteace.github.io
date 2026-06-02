// events.yml
export interface EventData {
  updated: string;
  events: EventItem[];
}
export interface EventItem {
  title: string;
  circle: string;
  status:
    | "upcoming"
    | "tentative"
    | "past"
    | "cancelled";
  sortDate: string;
  body: string;
}

// hitokoto.yml
export interface Hitokoto {
  text: string;
  date: string;
  note?: string;
}

// link_exchange.yml
export interface LinkExchange {
  id: string;

  name: string;
  author: string;
  url: string;

  themeColor: string;
  subColor: string;
  textDisplay: number;

  darkThemeColor?: string;

  thumbnail?: string;
  thumbnailAlt?: string;

  logo?: string;
  banner?: string;
}