import React, { Component } from "react";
import { Header, Segment, Grid, Image } from "semantic-ui-react";
import QuestionList from "./QuestionList";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class UserInformation extends Component {
  render() {
    const { author, question, answered, btnContent } = this.props;
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {question.author} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={author.avatarURL} />
            </Grid.Column>
            <QuestionList
              question={question}
              answered={answered}
              btnContent={btnContent}
            />
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

UserInformation.propTypes = {
  question:PropTypes.object.isRequired,
  author:PropTypes.object.isRequired,
  questionId:PropTypes.string.isRequired,
  answered:PropTypes.bool.isRequired,
  btnContent:PropTypes.string.isRequired

};

function mapStateToProps({ users, questions }, { questionId }) {
  let question, author;
  if (questionId !== undefined) {
    question = questions[questionId];
    author = users[question.author];
  }
  return {
    question,
    author
  };
}

export default connect(mapStateToProps)(UserInformation);
