import React, { Component } from "react";
import { Menu, Responsive, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    const { users, authUser } = this.props;

    return (
      <Responsive as={Menu} minWidth={651} color="green" pointing>
        <Menu.Item name="Home" as={NavLink} to="/" exact />
        <Menu.Item name="New Question" as={NavLink} to="/add" />
        <Menu.Item name="Leader Dashboard" as={NavLink} to="/leaderboard" />
        <Menu.Menu position="right">
          <Menu.Item>
            <span>
              <Image
                src={users[authUser].avatarURL}
                avatar
                spaced="right"
                verticalAlign="bottom"
              />
            </span>
            <span>{users[authUser].name}</span>
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
function mapStateToProps({ users, authUser }) {
  return {
    users,
    authUser
  };
}

export default connect(mapStateToProps)(NavBar);
