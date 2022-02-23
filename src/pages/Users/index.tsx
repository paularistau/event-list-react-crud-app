import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header, LayoutView, PageTitle, UsersContent } from "./styles";

export const Users = () => {
  return (
    <UsersContent>
      <Sidebar />
      <LayoutView>
        <Header>
          <PageTitle>Users</PageTitle>
        </Header>
      </LayoutView>
    </UsersContent>
  );
};
