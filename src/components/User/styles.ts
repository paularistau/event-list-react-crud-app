import styled from "@emotion/styled";
import { Box, FormControl, RadioGroup } from "@mui/material";

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

export const CreatEventFormLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;

  div {
    > ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      height: 60px;
      justify-content: space-between;
    }
    > li.Mcss-6hp17o-MuiList-root-MuiMenu-list {
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
`;

export const CreatEventFormColumn = styled.div`
  display: block;
  flex-direction: column;
  width: 50%;
`;

export const PreviewImage = styled.img`
  width: 50%;
  height: 40%;
`;

export const ButtonUploadPicture = styled.label`
  height: 90px;
  width: 100px;
  background-color: #dddddd !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  margin-right: 24px;
`;

export const ImagePreview = styled.img`
  height: auto;
  max-height: 90px;
  width: fit-content;
  border-radius: 50px;
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

export const Options = styled.div``;
export const FormControlCustom = styled(FormControl)`
  label {
    top: 14px !important;
  }
`;
