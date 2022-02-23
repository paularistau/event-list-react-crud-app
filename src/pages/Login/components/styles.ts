import styled from "@emotion/styled/";
import { Alert, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 390px;
  padding: 0 84px;
`;

export const BackgroundImage = styled(Paper)`
  background: center/cover url("https://imgur.com/LWkjx2C.png") no-repeat;
  width: 50%;
  height: 100vh;
`;

export const H2 = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  /* identical to box height, or 67% */

  display: flex;
  align-items: flex-start;
  text-align: flex-start;
  letter-spacing: 0.15px;

  color: #000000;
`;

export const Text = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */
  margin-right: 24px;

  color: #000000;

  span {
    color: #2196f3;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

export const LoginInput = styled(TextField)`
  margin-top: 24px;
  margin-right: 12px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const InputGroupInLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AlertMessage = styled(Alert)`
  position: absolute;
  bottom: 24px;
  width: 100%;
`;

export const Error = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #c6343f;
  margin-top: 4px;
`;
