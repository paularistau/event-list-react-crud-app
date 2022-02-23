import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import {
  FormLabel,
  Modal,
  Radio,
  Typography,
  Button,
  FormControlLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LocalSeeIcon from "@mui/icons-material/LocalSee";

import {
  ModalContent,
  ModalHeader,
  CreatEventForm,
  CreatEventFormLine,
  ButtonUploadPicture,
  ImagePreview,
  RadioGroupCustom,
  FormControlCustom,
  Options,
} from "./styles";

import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { EVENT_POST, USER_PUT } from "../../services";
import { IEvent, IUser } from "../../types/types";
import { OutlinedInput, Theme } from "@material-ui/core";
import { UserContext } from "../../UserContext";
import { CustomButton } from "../EventModal/styles";

interface ModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  user?: IUser;
}

export const EditModal = ({ open, onClose, user }: ModalProps) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = React.useState<string>("");
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit() {
    const token = window.localStorage.getItem("token");

    const body: IUser = {
      username: username,
      email: email,
      role: role,
    };

    const { url, options } = USER_PUT(user?.id!, body);
    const response = await fetch(url, options);
    const json = await response.json();
  }

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
            Edit user_name profile
          </Typography>
          <Button onClick={() => onClose(false)}>
            <CloseIcon />
          </Button>
        </ModalHeader>
        <CreatEventForm>
          <CreatEventFormLine>
            <ImagePreview
              src={
                user?.src ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiyHYtDJQ0t5jCs4j_PiD5ESMvPwnvHVa3w&usqp=CAU"
              }
              alt=""
            ></ImagePreview>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              defaultValue={user?.username}
              onChange={({ target }) => setUsername(target.value)}
              focused
            />
          </CreatEventFormLine>
          <CreatEventFormLine>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              onChange={({ target }) => setUsername(target.value)}
              defaultValue={user?.email}
              focused
            />
          </CreatEventFormLine>
          <CreatEventFormLine>
            <FormControlCustom fullWidth variant="outlined">
              <InputLabel id="demo-customized-select-label">Age</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                defaultValue={user?.role}
                defaultChecked
                onChange={({ target }) => setRole(target.value)}
              >
                {["administrator", "subscriber"].map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControlCustom>
          </CreatEventFormLine>
        </CreatEventForm>

        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
          fullWidth
        >
          Save
        </CustomButton>
      </ModalContent>
    </Modal>
  );
};
