import React, { Component } from "react";
import { Header, Segment, Grid, Image } from "semantic-ui-react";
import QuestionList from "./QuestionList";
import { connect } from "react-redux";

class UserInformation extends Component {
  render() {
    const { question, answered, btnContent } = this.props;
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {question.author} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src="https://image.flaticon.com/icons/png/512/145/145843.png" />
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
function mapStateToProps({ questions }, { questionId }) {
  console.log("questions........." + questions);
  console.log("questionId........." + questionId);
  let question;
  if (questionId !== undefined) {
    question = questions[questionId];
  }
  console.log("question........." + question);
  return {
    question
  };
}

export default connect(mapStateToProps)(UserInformation);
