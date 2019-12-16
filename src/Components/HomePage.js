import React from "react";
import { Grid, Tab, Menu, Label } from "semantic-ui-react";
import UserInformation from "./UserInformation";

const panes = [
  {
    menuItem: (
      <Menu.Item key="Unanswered">
        Unanswered<Label color="red">15</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <UserInformation />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="Answered">
        Answered<Label color="green">15</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <UserInformation />
      </Tab.Pane>
    )
  }
];

const HomePage = () => (
  <Grid columns={1} centered>
    <Grid.Column width={10}>
      <Tab
        menu={{ pointing: true, fluid: true, widths: 2, color: "red" }}
        panes={panes}
      />
    </Grid.Column>
  </Grid>
);

export default HomePage;
