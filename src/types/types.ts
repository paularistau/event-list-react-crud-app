export interface IEventType {
  id: string;
  name: string;
}

export interface IEvent {
  id?: number;
  name?: string;
  type?: string;
  description?: string;
  user_id?: string;
  start_date?: string;
  end_date?: string;
  status?: string;
  img?: string;
  src?: string;
}

export interface IEventSubscribed extends IEvent {
  eventId?: number;
}
export interface IUser {
  email: string;
  id?: number;
  name?: string;
  role?: string;
  username?: string;
  subscribedEvents?: IEventSubscribed[];
  src?: string;
  password?: string;
}

export interface AlertProps {
  active: boolean;
  text?: string;
  type?: "error" | "warning" | "success" | "info";
}

export interface IPagination {
  page: number;
  total: number;
  user?: string;
}
