import React, { Component } from "react";
import { Form, Grid, Segment, Header } from "semantic-ui-react";
import { setAuthUserID } from "../actions/authUser";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

class Login extends Component {
  state = {
    selectedUser: ""
  };
  onChange = (e, { value }) => {
    this.setState({ selectedUser: value });
  };

  handleSubmit = e => {
    debugger;
    e.preventDefault();
    this.props.dispatch(setAuthUserID(this.state.selectedUser));
  };

  render() {
    let listofUsers;
    const { users } = this.props;
    if (users) {
      listofUsers = Object.values(users).map(user => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: {
          avatar: true,
          src: user.avatarURL
        }
      }));
    }

    return (
      <Grid columns={1} padded textAlign="center">
        <LoadingBar />
        <Grid.Column width={8}>
          <Header as="h4" block attached="top" textAlign="center">
            <Header.Content>
              Welcome to the Would You Rather App!
            </Header.Content>
            <Header.Subheader>Please log in to continue</Header.Subheader>
          </Header>
          <Segment placeholder>
            {listofUsers ? (
              <Form onSubmit={this.handleSubmit}>
                <Header as="h2" color="green">
                  Select Your Name!!!
                </Header>
                <Form.Dropdown
                  placeholder="Select Your name"
                  fluid
                  selection
                  options={listofUsers}
                  onChange={this.onChange}
                  required
                />
                <Form.Button content="Login" positive fluid />
              </Form>
            ) : null}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps({ users }) {
  if (users) {
    return {
      users
    };
  }
  return {};
}

export default connect(mapStateToProps)(Login);
