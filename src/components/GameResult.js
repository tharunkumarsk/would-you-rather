import React, { Component, Fragment } from "react";
import {
  Header,
  Segment,
  Progress,
  Grid,
  Image,
  Divider,
  Label
} from "semantic-ui-react";
import { connect } from "react-redux";

class GameResult extends Component {
  render() {
    const { question, user, author } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const yourVote = user.answers[question.id];
    return (
      <Fragment>
        <Segment.Group compact horizontal>
          <Grid divided padded>
            <Grid.Row width={2}>
              <Grid.Column width={2} verticalAlign="middle">
                <Image src={author.avatarURL} />
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as="h3" textAlign="center">
                  Result
                </Header>
                <Divider></Divider>
                <Grid>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    width={6}
                  >
                    <h4>{question.optionOne.text}</h4>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Progress
                      percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
                      progress
                      color="red"
                    >
                      {optionOneVotes} out of {votesTotal} votes
                    </Progress>
                  </Grid.Column>
                  {yourVote === "optionOne" && (
                    <Grid.Column width={2}>
                      <Label
                        as="a"
                        color="red"
                        corner="right"
                        icon="user"
                      ></Label>
                    </Grid.Column>
                  )}
                </Grid>
                <Divider></Divider>
                <Grid>
                  <Grid.Column
                    textAlign="center"
                    verticalAlign="middle"
                    width={6}
                  >
                    <h4>{question.optionTwo.text}</h4>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Progress
                      percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
                      progress
                      color="green"
                    >
                      {optionTwoVotes} out of {votesTotal} votes
                    </Progress>
                  </Grid.Column>
                  {yourVote === "optionTwo" && (
                    <Grid.Column width={2}>
                      <Label
                        as="a"
                        color="red"
                        corner="right"
                        icon="user"
                      ></Label>
                    </Grid.Column>
                  )}
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </Fragment>
    );
  }
}
function mapStateToProps({ questions, authUser, users }, { questionId }) {
  debugger;
  let question, user;
  if (questions && authUser && users) {
    question = questions[questionId];
    user = users[authUser];
    const author = users[question.author];
    return {
      question,
      user,
      authUser,
      author
    };
  }
  return {};
}

export default connect(mapStateToProps)(GameResult);
