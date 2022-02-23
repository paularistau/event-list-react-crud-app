import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, Modal, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { EVENT_PUT } from "../../services";
import { AlertProps, IEvent } from "../../types/types";
import Loading from "../Loading/Loading";
import {
  CreatEventForm,
  CreatEventFormLine,
  CreatEventFormSubLine,
  CustomButton,
  DateTimePickerCustom,
  LoadingWrapper,
  ModalContent,
  ModalHeader,
  TextFieldCustom,
} from "./styles";

interface ModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  item?: IEvent;
  id: number;
}

export const EditEventModal = ({ open, onClose, item, id }: ModalProps) => {
  const name = useForm();
  const description = useForm();
  const type = useForm();
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [showAlert, setShowAlert] = useState<AlertProps>();

  const [img, setImg] = React.useState<any>();
  const { data, loading, request } = useFetch();
  const navigate = useNavigate();
  const formData = new FormData();

  async function handleSubmit(id: number) {
    formData.append("img", img.raw);
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("type", type.value);
    formData.append("start_date", startDate.toString());
    formData.append("end_date", endDate.toString());

    const { url, options } = EVENT_PUT(id, formData);
    const { response } = await request(url, options);

    if (response!.ok) {
      setShowAlert({
        active: true,
        text: `Event ${name.value} sucefully created `,
        type: "success",
      });
      onClose(false);
      navigate("/");
    }
  }

  function handleImgChange(file: any) {
    setImg({
      preview: URL.createObjectURL(file),
      raw: file,
    });
  }

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (showAlert?.active) {
      setTimeout(() => {
        setShowAlert({ active: false });
      }, 3000);
    }
  }, [showAlert]);

  if (!item) return <></>;

  return (
    <Modal
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalContent>
        <ModalHeader>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Create Event
          </Typography>
          <Button onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </ModalHeader>
        {loading ? (
          <LoadingWrapper>{<Loading />}</LoadingWrapper>
        ) : (
          <CreatEventForm>
            <CreatEventFormLine>
              {/* {item.src ? (
                <ImagePreview src={img.preview} alt="" />
              ) : (
                <>
                  <ButtonUploadPicture color="inherit" htmlFor="upload-photo">
                    <LocalSeeIcon fontSize="inherit" />
                  </ButtonUploadPicture>
                  <input
                    type="file"
                    hidden
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleImgChange(
                        (e.target as HTMLInputElement)?.files?.[0]
                      )
                    }
                    id="upload-photo"
                  />
                </>
              )} */}
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                defaultValue={item?.name}
                focused
                {...name}
              />
            </CreatEventFormLine>
            <input
              type="file"
              hidden
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleImgChange((e.target as HTMLInputElement)?.files?.[0])
              }
              id="reupload-photo"
            />
            <CreatEventFormLine>
              <TextFieldCustom
                id="eventType"
                label="Event type"
                variant="outlined"
                {...type}
              />
              <CreatEventFormSubLine>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePickerCustom
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={item!.start_date}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePickerCustom
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                  />
                </LocalizationProvider>
              </CreatEventFormSubLine>
            </CreatEventFormLine>
            <CreatEventFormLine>
              <TextField
                id="eventDescription"
                label="Description"
                variant="outlined"
                type="text"
                multiline
                rows={2}
                fullWidth
                inputProps={{ maxLength: 200 }}
                {...description}
              />
            </CreatEventFormLine>
            <Typography color={"red"} variant="body2">
              *Text must be over 200 caracters
            </Typography>
          </CreatEventForm>
        )}

        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => handleSubmit(id)}
          fullWidth
        >
          Save
        </CustomButton>
      </ModalContent>
    </Modal>
  );
};
