import { useEffect, useState } from "react";
import { CardGroup } from "../../../../components/Cards";
import Loading from "../../../../components/Loading/Loading";
import { Sidebar } from "../../../../components/Sidebar";
import useFetch from "../../../../hooks/useFetch";
import { SUBSCRIBE_DELETE, SUBSCRIBE_GET } from "../../../../services";
import { IEventSubscribed } from "../../../../types/types";
import { EventsContent, Header, LayoutView, PageTitle } from "./styles";

export const MyEvents = (user: any) => {
  const { loading, request } = useFetch();
  const [myEvents, setMyEvents] = useState<IEventSubscribed[]>([]);

  const handleUnsubscribe = async (id: number) => {
    const { url, options } = SUBSCRIBE_DELETE(id);
    const { response } = await request(url, options);

    if (response!.ok) window.location.reload();
  };

  useEffect(() => {
    async function fetchSubscribedEvents() {
      const { url, options } = SUBSCRIBE_GET();
      const { response, json } = await request(url, options);
      if (response!.ok) {
        setMyEvents(json);
        // let subEvt: number[] = [];
        // json.map((item: IEventSubscribed) => subEvt.push(item?.eventId!));
        // setSubscribedEvents(subEvt);
      }
    }
    fetchSubscribedEvents();
  }, []);

  if (loading) return <Loading />;

  return (
    <EventsContent>
      <Sidebar />
      <LayoutView>
        <Header>
          <PageTitle>My events</PageTitle>
        </Header>
        <CardGroup
          items={myEvents}
          disableSubscription
          onUnsubscribe={(id) => handleUnsubscribe(id)}
          user={user}
        />
      </LayoutView>
    </EventsContent>
  );
};
