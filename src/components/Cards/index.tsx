import { IEvent, IEventSubscribed } from "../../types/types";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import moment from "moment-timezone";

import {
  CardBody,
  CardInformation,
  CardTypography,
  CardsWrapper,
  CardComponent,
  CardActionsGroup,
  CarTitle,
  CardSubLabel,
  NothingHere,
} from "./styles";
import { ButtonGroup } from "@material-ui/core";
import Loading from "../Loading/Loading";
import useFetch from "../../hooks/useFetch";

interface CardsProps {
  items: IEvent[] | IEventSubscribed[];
  onEdit?: (id: number, item: IEvent) => void;
  onDelete?: (id: number) => void;
  onSubscribe?: (id: number, item: IEventSubscribed) => void;
  onUnsubscribe?: (id: number) => void;
  subscribedEvents?: number[];
  disableSubscription?: boolean;
  user: any;
}

export const CardGroup = ({
  items,
  onEdit,
  onDelete,
  onSubscribe,
  onUnsubscribe,
  subscribedEvents,
  disableSubscription,
  user,
}: CardsProps) => {
  const { loading, request, error } = useFetch();

  if (!user || loading) return <Loading />;
  if (!items?.length || error)
    return (
      <NothingHere>
        <img
          src="https://imgur.com/Bl6T2V7.png"
          alt="not-to-see"
          width={580}
          height="auto"
        />
        <Typography gutterBottom variant="h5" component="div">
          Take a deep breath.
          <br /> We don't have any events for you
        </Typography>
      </NothingHere>
    );
  return (
    <CardsWrapper
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {items?.map((item) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={item?.id}>
            <CardComponent>
              <CardBody>
                <CardMedia
                  component="img"
                  height="140"
                  image={item?.src}
                  alt="card ilustration"
                />
                <CarTitle>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.name}
                  </Typography>
                  {subscribedEvents?.includes(item?.id!) && (
                    <CardSubLabel>Subscribed</CardSubLabel>
                  )}
                </CarTitle>
                <CardInformation>
                  <CardTypography variant="body2" color="text.secondary">
                    <span>Start at:</span>{" "}
                    {moment(item?.start_date).format("MM/DD/YYYY, h:mm:ss a")}
                  </CardTypography>
                  <CardTypography variant="body2" color="text.secondary">
                    <span>End at:</span>{" "}
                    {moment(item?.end_date).format("MM/DD/YYYY, h:mm:ss a")}
                  </CardTypography>
                  <CardTypography variant="body2" color="text.secondary">
                    <span>Category:</span> {item?.type}
                  </CardTypography>
                  <CardTypography variant="body2" color="text.secondary">
                    <span>Status:</span> {item?.status}
                  </CardTypography>
                  <CardTypography variant="body2" color="text.secondary">
                    <span>Description:</span> {item?.description}
                  </CardTypography>
                </CardInformation>
              </CardBody>
              <>
                {!subscribedEvents?.includes(item?.id!) && (
                  <CardActionsGroup
                    variant="outlined"
                    size="large"
                    color="primary"
                    fullWidth
                    onClick={() =>
                      disableSubscription
                        ? onUnsubscribe!(item?.id ?? 0)
                        : onSubscribe!(item?.id ?? 0, item)
                    }
                  >
                    {subscribedEvents?.includes(item?.id!) ||
                    disableSubscription
                      ? "Unsubscribe"
                      : "Subscribe"}
                  </CardActionsGroup>
                )}
                {user?.user?.role?.toLowerCase() === "administrator" &&
                  !disableSubscription && (
                    <ButtonGroup fullWidth color="primary">
                      {/* <CardActionsGroup
                        variant="outlined"
                        size="large"
                        color="primary"
                        fullWidth
                        onClick={() => onEdit!(item?.id ?? 0, item)}
                      >
                        Edit
                      </CardActionsGroup> */}
                      <CardActionsGroup
                        variant="outlined"
                        size="large"
                        color="primary"
                        fullWidth
                        onClick={() => onDelete!(item?.id ?? 0)}
                      >
                        Delete
                      </CardActionsGroup>
                    </ButtonGroup>
                  )}
              </>
            </CardComponent>
            {(item?.id ?? 0) % 3 === 0 ? <br /> : <></>}
          </Grid>
        );
      })}
    </CardsWrapper>
  );
};
