import styled from "@emotion/styled";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Box, Button, RadioGroup, TextField } from "@mui/material";

export const ModalContent = styled(Box)`
  width: 905px;
  height: auto;
  background: white;
  border-radius: 24px;
  padding: 55px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CreatEventForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

export const CreatEventFormLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const CreatEventFormSubLine = styled(CreatEventFormLine)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0;
  margin-left: 15px;

  div {
    margin-right: 15px;
  }
`;

export const CreatEventFormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreviewImage = styled.img`
  width: 50%;
  height: 40%;
`;

export const ButtonUploadPicture = styled.label`
  height: 189px;
  width: 50%;
  background-color: #dddddd !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 24px;
`;

export const ButtonReuploadPicture = styled.label`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #1876d1;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  height: auto;
  max-height: 189px;
  width: fit-content;
  margin-right: 24px;
`;

export const RadioGroupCustom = styled(RadioGroup)`
  margin-left: 5px;
  div {
    width: 190px;
    justify-content: space-between;
    margin-left: 21px;
  }
`;

export const CustomButton = styled(Button)`
  width: 100%;
  height: 58px;
  background: #1876d1 !important;
  color: #fff !important;
  border: none;
  border-radius: 12px !important;
  cursor: pointer;
  text-transform: capitalize !important;
`;

export const DateTimePickerCustom = styled(DateTimePicker)`
  width: 50%;
  margin-right: 12px;
`;

export const TextFieldCustom = styled(TextField)`
  width: 40%;
`;
