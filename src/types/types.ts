import React from "react";

export interface IEventType {
  id: string;
  name: string;
}

export interface IEvent {
  id: string;
  eventTypeId: string;
  userId: string;
  name: string;
  description: string;
  start: Date;
  end: Date;
  status: "active" | "inactive";
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}
