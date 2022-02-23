import CloseIcon from "@mui/icons-material/Close";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, Modal, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { AlertMessage } from "../../pages/Login/components/styles";
import { EVENT_POST } from "../../services";
import { AlertProps } from "../../types/types";
import Loading from "../Loading/Loading";
import {
  ButtonReuploadPicture,
  ButtonUploadPicture,
  CreatEventForm,
  CreatEventFormLine,
  CreatEventFormSubLine,
  CustomButton,
  DateTimePickerCustom,
  ImagePreview,
  LoadingWrapper,
  ModalContent,
  ModalHeader,
  TextFieldCustom,
} from "./styles";
interface ModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

export const CreateEventModal = ({ open, onClose }: ModalProps) => {
  const eventName = useForm();
  const eventDescription = useForm();
  const eventType = useForm();
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [showAlert, setShowAlert] = useState<AlertProps>();

  const [img, setImg] = React.useState<any>();
  const { data, loading, request } = useFetch();
  const navigate = useNavigate();
  const formData = new FormData();

  async function handleSubmit() {
    formData.append("img", img.raw);
    formData.append("name", eventName.value);
    formData.append("description", eventDescription.value);
    formData.append("type", eventType.value);
    formData.append("start_date", startDate.toString());
    formData.append("end_date", endDate.toString());

    const { url, options } = EVENT_POST(formData);
    const { response } = await request(url, options);

    if (response!.ok) {
      setShowAlert({
        active: true,
        text: `Event ${eventName.value} sucefully created `,
        type: "success",
      });
      setTimeout(() => {
        onClose(false);
        window.location.reload();
      }, 3000);
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
              {img ? (
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
              )}
              <TextField
                id="eventName"
                label="Name"
                variant="outlined"
                fullWidth
                {...eventName}
              />
            </CreatEventFormLine>
            <ButtonReuploadPicture color="inherit" htmlFor="reupload-photo">
              Reupload image
            </ButtonReuploadPicture>
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
                {...eventType}
              />

              <CreatEventFormSubLine>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePickerCustom
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={startDate}
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
                {...eventDescription}
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
          onClick={() => handleSubmit()}
          fullWidth
        >
          Save
        </CustomButton>
        {showAlert?.active && (
          <AlertMessage severity={showAlert.type}>
            {showAlert.text}
          </AlertMessage>
        )}
      </ModalContent>
    </Modal>
  );
};
