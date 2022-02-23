import React, { useContext, useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import SettingsIcon from "@material-ui/icons/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../../UserContext";
import { EditModal } from "../../components/User/EditModal";

import {
  SidebarDrawer,
  UserInformations,
  Username,
  SidebarListItem,
  Role,
  UserText,
} from "./styles";
import { Avatar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, userLogout } = useContext(UserContext);
  const [openEditUserModal, setOpenEditUserModal] = useState<boolean>(false);
  let navigate = useNavigate();

  const menuItems = [
    {
      text: "All Events",
      icon: <DashboardIcon />,
      onClick: () => navigate("/"),
    },
    {
      text: "My events",
      icon: <DownhillSkiingIcon />,
      onClick: () => navigate("/my-events"),
    },
    {
      text: "Profile Settings",
      icon: <SettingsIcon />,
      onClick: () => setOpenEditUserModal(true),
    },
  ];

  return (
    <SidebarDrawer>
      <UserInformations>
        <Avatar
          src={
            data?.src ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiyHYtDJQ0t5jCs4j_PiD5ESMvPwnvHVa3w&usqp=CAU"
          }
        />
        <UserText>
          <Username>{data?.username}</Username>
          <Role>{data?.role}</Role>
        </UserText>
      </UserInformations>
      <Divider />
      <List>
        {menuItems?.map((item, index) => (
          <SidebarListItem button key={index} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </SidebarListItem>
        ))}
      </List>

      <Divider />
      <List>
        <SidebarListItem button onClick={() => userLogout()}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="logout" />
        </SidebarListItem>
      </List>

      <EditModal
        open={openEditUserModal}
        onClose={(value) => setOpenEditUserModal(value)}
        user={data?.user}
      />
    </SidebarDrawer>
  );
};
