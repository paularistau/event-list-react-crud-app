import React, { useContext, useEffect, useMemo, useState } from "react";
import { Sidebar } from "../../../../components/Sidebar";
import { CardGroup } from "../../../../components/Cards";
import { CreateEventModal } from "../../../../components/EventModal/CreateEvent";
import Loading from "../../../../components/Loading/Loading";
import { EditEventModal } from "../../../../components/EventModal/EditEvent";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { IEvent, IEventSubscribed, IUser } from "../../../../types/types";
import AddIcon from "@mui/icons-material/Add";
import { Box, Modal, Typography } from "@mui/material";

import {
  Header,
  LayoutView,
  PageTitle,
  IconButtonCustom,
  EventsContent,
} from "./styles";
import { Idata, UserContext } from "../../../../UserContext";
import {
  EVENT_DELETE,
  EVENT_GET,
  SUBSCRIBE_POST,
  SUBSCRIBE_GET,
  SUBSCRIBE_DELETE,
} from "../../../../services";
import useFetch from "../../../../hooks/useFetch";
import { json } from "stream/consumers";

interface EditModalProps {
  active: boolean;
  itemId?: number;
  item?: IEvent;
}

export const AllEvents = (user?: any) => {
  const [openEditModal, setOpenEditModal] = useState<EditModalProps>();
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [subscribedItem, setSubscribedItem] = useState<IEventSubscribed>();
  const { data, request } = useFetch();
  const [subscribedEvents, setSubscribedEvents] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleOpenCreateEvent = () => {
    setOpenCreateModal(true);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Do you really want to delete this event?");
    if (confirm) {
      const { url, options } = EVENT_DELETE(id);
      const { response } = await request(url, options);

      if (user?.user?.subscribedEvents?.length) {
        setSubscribedItem(
          user?.user?.subscribedEvents?.find(
            (item: IEventSubscribed) => item?.eventId === id
          )!
        );
      }

      if (response!.ok && subscribedItem?.eventId) {
        const { url, options } = SUBSCRIBE_DELETE(subscribedItem?.eventId);
        const { response } = await request(url, options);
        navigate("/");
      }

      if (response!.ok) navigate("/");
    }
  };

  const formData = new FormData();
  const handleSubscribe = async (id: number, item: IEvent) => {
    formData.append("src", item?.src!);
    formData.append("name", item?.name!);
    formData.append("description", item?.description!);
    formData.append("type", item?.type!);
    formData.append("start_date", item?.start_date!);
    formData.append("end_date", item?.end_date!);
    formData.append("event_id", item?.id?.toString()!);

    const { url, options } = SUBSCRIBE_POST(formData);
    const { response } = await request(url, options);

    if (response!.ok) window.location.reload();
  };

  async function fetchEvents() {
    const { url, options } = EVENT_GET();
    const { response, json } = await request(url, options);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  const refreshPage = (state: boolean) => {
    if (!state) {
      fetchEvents();
    }
  };

  return (
    <EventsContent>
      <Sidebar />
      <LayoutView>
        <Header>
          <PageTitle>All events</PageTitle>
          {user?.user?.role?.toLowerCase() === "administrator" && (
            <IconButtonCustom onClick={() => handleOpenCreateEvent()}>
              <AddIcon />
              New event
            </IconButtonCustom>
          )}
        </Header>
        <CardGroup
          items={data}
          onDelete={(id) => handleDelete(id)}
          onEdit={(id, item) =>
            setOpenEditModal({ active: true, itemId: id, item: item })
          }
          onSubscribe={(id, item) => handleSubscribe(id, item)}
          subscribedEvents={subscribedEvents}
          user={user}
        />
      </LayoutView>

      <CreateEventModal
        open={openCreateModal}
        onClose={(value) => {
          setOpenCreateModal(value);
          refreshPage(value);
        }}
      />
      <EditEventModal
        open={openEditModal?.active!}
        onClose={(value) => setOpenEditModal({ active: value })}
        item={openEditModal?.item}
        id={openEditModal?.itemId ?? 0}
      />
    </EventsContent>
  );
};
