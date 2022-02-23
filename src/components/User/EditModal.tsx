import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  CreatEventForm,
  CreatEventFormLine,
  FormControlCustom,
  ImagePreview,
  ModalContent,
  ModalHeader,
} from "./styles";

interface ModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  user?: any;
}

export const EditModal = ({ open, onClose, user }: ModalProps) => {
  // const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [role, setRole] = React.useState<string>("");
  // const navigate = useNavigate();
  // const formData = new FormData();
  // async function handleSubmit() {
  //   formData.append("username", username);
  //   formData.append("name", email);
  //   formData.append("type", role);

  //   const { url, options } = USER_PUT(user?.ID!, formData);
  //   const response = await fetch(url, options);
  //   const json = await response.json();
  // }

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
            {user?.data.user_nicename} profile
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
              defaultValue={user?.data.user_nicename}
              // onChange={({ target }) => setUsername(target.value)}
              focused
            />
          </CreatEventFormLine>
          <CreatEventFormLine>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              // onChange={({ target }) => setUsername(target.value)}
              defaultValue={user?.data.user_email}
              focused
            />
          </CreatEventFormLine>
          <CreatEventFormLine>
            <FormControlCustom fullWidth variant="outlined">
              <InputLabel id="demo-customized-select-label">Role</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                defaultValue={user?.roles[0]}
                defaultChecked
                // onChange={({ target }) => setRole(target.value)}
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
      </ModalContent>
    </Modal>
  );
};
