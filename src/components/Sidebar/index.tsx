import React, { useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";

import {
  SidebarDrawer,
  UserInformations,
  Username,
  SidebarListItem,
} from "./styles";
import { Avatar } from "@material-ui/core";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <SidebarDrawer variant="permanent" open={open}>
      <UserInformations>
        <Avatar src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg" />
        <Username>Aaron Young</Username>
      </UserInformations>
      <Divider />
      <List>
        {["All Events", "My events"].map((text, index) => (
          <SidebarListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <DashboardIcon /> : <MessageIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </SidebarListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Profile Settings"].map((text, index) => (
          <SidebarListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </SidebarListItem>
        ))}
      </List>
    </SidebarDrawer>
  );
};
