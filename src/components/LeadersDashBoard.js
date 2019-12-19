import React, { Component, Fragment } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider
} from "semantic-ui-react";
import { connect } from "react-redux";

export class LeadersDashBoard extends Component {
  render() {
    const { userInfo } = this.props;

    return (
      <Fragment>
        {userInfo.map((user, id) => (
          <Segment.Group key={id} compact horizontal>
            <Grid divided padded>
              <Grid.Row width={2}>
                <Grid.Column width={2} verticalAlign="middle">
                  <Image src={user.avatarURL} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as="h3" textAlign="left">
                    {user.name}
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>
                      {user.answeredQuestions}
                    </Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>{user.askedQuestions}</Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
                        {user.totalQuestions}
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        ))}
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  const userInfo = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answeredQuestions: Object.values(user.answers).length,
      askedQuestions: user.questions.length,
      totalQuestions: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => (a.totalQuestions < b.totalQuestions ? 1 : -1));
  return {
    userInfo
  };
}

export default connect(mapStateToProps)(LeadersDashBoard);
