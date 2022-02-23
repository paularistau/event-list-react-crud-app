import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { CardGroup } from "../../../../components/Cards";
import { CreateEventModal } from "../../../../components/EventModal/CreateEvent";
import { EditEventModal } from "../../../../components/EventModal/EditEvent";
import { Sidebar } from "../../../../components/Sidebar";
import useFetch from "../../../../hooks/useFetch";
import { EVENT_DELETE, EVENT_GET, SUBSCRIBE_POST } from "../../../../services";
import { IEvent } from "../../../../types/types";
import {
  EventsContent,
  Header,
  IconButtonCustom,
  LayoutView,
  PageTitle,
} from "./styles";

interface EditModalProps {
  active: boolean;
  itemId?: number;
  item?: IEvent;
}

export const AllEvents = (user?: any) => {
  const [openEditModal, setOpenEditModal] = useState<EditModalProps>();
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const { data, request } = useFetch();

  const handleOpenCreateEvent = () => {
    setOpenCreateModal(true);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Do you really want to delete this event?");
    if (confirm) {
      const { url, options } = EVENT_DELETE(id);
      const { response } = await request(url, options);
      if (response!.ok) window.location.reload();
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
    await request(url, options);
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
