import styled from "@emotion/styled/";
import { Button } from "@mui/material";

export const EventsContent = styled.div`
  overflow: none;
`;

export const LayoutView = styled.div`
  margin-left: 256px;
  padding: 70px 62px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const PageTitle = styled.text`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: #000000;
`;

export const IconButtonCustom = styled(Button)`
  width: 224px;
  height: 54px;
  border-radius: 50;
  background-color: #2196f3;
  outline: none;
`;
