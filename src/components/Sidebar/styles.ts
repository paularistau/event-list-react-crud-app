import styled from "@emotion/styled";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";

export const SidebarDrawer = styled(Drawer)`
  width: 256px;
  height: 100vh;
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
  flex-direction: column;
  padding: 40px 20px;
`;
export const Username = styled.text`
  font-family: Inter;
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.87);
`;
