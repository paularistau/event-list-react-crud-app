import React, { useEffect, useState } from "react";
import { Sidebar } from "../../../../components/Sidebar";
import { CardGroup } from "../../../../components/Cards";
import Loading from "../../../../components/Loading/Loading";
import { IEventSubscribed } from "../../../../types/types";

import { Header, LayoutView, PageTitle, EventsContent } from "./styles";
import { MY_EVENT_DELETE, MY_EVENT_GET } from "../../../../services";
import useFetch from "../../../../hooks/useFetch";

export const MyEvents = (user: any) => {
  const { loading, request } = useFetch();
  const [subscribedEvents, setSubscribedEvents] = useState<number[]>([]);

  const handleUnsubscribe = async (id: number) => {
    const { url, options } = MY_EVENT_DELETE(id);
    const { response } = await request(url, options);

    if (response!.ok) window.location.reload();
  };

  useEffect(() => {
    async function fetchSubscribedEvents() {
      const { url, options } = MY_EVENT_GET();
      const { response, json } = await request(url, options);
      if (response!.ok) {
        let subEvt: number[] = [];
        json.map((item: IEventSubscribed) => subEvt.push(item?.eventId!));
        setSubscribedEvents(subEvt);
      }
    }
    fetchSubscribedEvents();
  }, []);
  useEffect(() => {
    console.log("subscribedEvents", subscribedEvents, user);
  }, [subscribedEvents]);

  if (loading) return <Loading />;

  return (
    <EventsContent>
      <Sidebar />
      <LayoutView>
        <Header>
          <PageTitle>My events</PageTitle>
        </Header>
        <CardGroup
          items={user?.subscribedEvents!}
          disableSubscription
          onUnsubscribe={(id) => handleUnsubscribe(id)}
          subscribedEvents={subscribedEvents}
          user={user}
        />
      </LayoutView>
    </EventsContent>
  );
};
