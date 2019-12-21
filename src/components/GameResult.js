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
import PropTypes from 'prop-types';


class GameResult extends Component {
  render() {
    const { question, user, author } = this.props;
    const optionOneVotesCount = question.optionOne.votes.length;
    const optionTwoVotesCount = question.optionTwo.votes.length;
    const totalVotes = optionOneVotesCount + optionTwoVotesCount;
    const yourVote = user.answers[question.id];

    let primary = "";
    if (optionOneVotesCount > optionTwoVotesCount) {
      primary = "option1";
    } else if (optionTwoVotesCount > optionOneVotesCount) {
      primary = "option2";
    }

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
                      percent={(
                        (optionOneVotesCount / totalVotes) *
                        100
                      ).toFixed(2)}
                      progress
                      color={primary === "option1" ? "green" : "red"}
                    >
                      {optionOneVotesCount} out of {totalVotes} votes
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
                      percent={(
                        (optionTwoVotesCount / totalVotes) *
                        100
                      ).toFixed(2)}
                      progress
                      color={primary === "option2" ? "green" : "red"}
                    >
                      {optionTwoVotesCount} out of {totalVotes} votes
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

GameResult.propTypes = {
  question:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  author:PropTypes.object.isRequired,
  authUser:PropTypes.string.isRequired,
  questionId:PropTypes.string.isRequired
};

function mapStateToProps({ questions, authUser, users }, { questionId }) {
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
