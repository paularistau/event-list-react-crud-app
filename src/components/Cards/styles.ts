import styled from "@emotion/styled";
import { Button, CardActionArea, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const NothingHere = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 34px;
`;

export const CardTypography = styled(Typography)`
  text-transform: capitalize;
  margin-left: 20px !important;

  span {
    font-weight: bold;
    margin-top: 8px;
  }
`;

export const CardsWrapper = styled(Grid)`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 40px 0;
  padding-right: 24px;
`;

export const CardComponent = styled.div`
  width: 345px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`;

export const CardBody = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 12px;
`;
export const CardInformation = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify: flex-start;
  width: 100%;
  height: 165px;
  overflow-y: auto;
`;

export const CardActionsGroup = styled(Button)`
  position: relative;
  bottom: 0;
  height: 48px;
  margin-top: 12px;

  &:hover {
    background-color: #e3f2fd;
    cursor: pointer;
  }
`;

export const CarTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-top: 24px;
}
`;
export const CardSubLabel = styled.label`
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 3px 8px;
  border-radius: 12px;
  background: rgba(29, 151, 185, 0.24);
  color: #1d97b9 !important;
  text-transform: capitalize;
  white-space: nowrap;
`;
