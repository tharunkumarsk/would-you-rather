import React, { Component } from "react";
import { Menu, Responsive, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Responsive as={Menu} minWidth={651} color="green" pointing>
        <Menu.Item name="Home" as={NavLink} to="/" exact />
        <Menu.Item name="New Question" as={NavLink} to="/add" />
        <Menu.Item name="Leader Dashboard" as={NavLink} to="/leaderboard" />
        <Menu.Menu position="right">
          <Menu.Item>
            <span>
              <Image
                src="https://image.flaticon.com/icons/png/512/145/145843.png"
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
            </span>
            <span>Tharun</span>
          </Menu.Item>
          <Menu.Item>
            <Button
              content="Logout"
              labelPosition="right"
              compact
              negative
              inverted
              icon="power off"
              size="mini"
              onClick={this.handleLogout}
            />
          </Menu.Item>
        </Menu.Menu>
      </Responsive>
    );
  }
}

export default NavBar;
