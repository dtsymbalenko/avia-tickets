export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number; 
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: [Segment, Segment];
}

export enum ActiveTab {
  CHEAP = 'cheap',
  FAST = 'fast',
  OPTIMAL = 'optimal',
}

export interface TicketApiResponse {
  tickets: Ticket[];
  stop: boolean;
}