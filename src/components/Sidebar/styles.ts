import styled from "@emotion/styled";
import ListItem from "@material-ui/core/ListItem";

export const SidebarDrawer = styled.div`
  width: 256px;
  height: 100vh;
  position: absolute;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

export const SidebarListItem = styled(ListItem)`
  &:hover {
    background-color: #e3f2fd !important;
    color: #2196f3;
    svg path {
      stroke: #2196f3;
      color: #2196f3;
    }
  }
`;

export const UserInformations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 20px;
`;

export const UserText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const Username = styled.text`
  font-family: Inter;
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.87);
  text-transform: capitalize;
`;
export const Role = styled.text`
  font-family: Inter;
  margin-top: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.65);
  text-transform: capitalize;
`;
