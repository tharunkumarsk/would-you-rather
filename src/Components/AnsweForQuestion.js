import React, { Component } from "react";
import {
  Header,
  Segment,
  Grid,
  Image,
  Button,
  Form,
  Radio
} from "semantic-ui-react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/users";
import GameResult from "./GameResult";

class AnsweForQuestion extends Component {
  state = {
    selectedOption: "",
    submitSuccess: false
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedOption: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.selectedOption !== "") {
      const { authUser, question } = this.props;
      this.props.dispatch(
        handleSaveAnswer(authUser, question.id, this.state.selectedOption)
      );
      this.setState({ submitSuccess: true });
    }
  };

  render() {
    const { question, author } = this.props;
    if (
      this.state.submitSuccess === true ||
      this.props.location.state.action === "View Result"
    ) {
      return <GameResult questionId={question.id}></GameResult>;
    }
    return (
      <Grid columns={2} padded textAlign="center">
        <Grid.Column width={8}>
          <Segment.Group>
            <Header as="h5" textAlign="left" block attached="top">
              {question.author}
            </Header>
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Image src={author.avatarURL} />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header as="h4">Would you rather</Header>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <Radio
                        label={question.optionOne.text}
                        name="radioGroup"
                        value="optionOne"
                        checked={this.state.selectedOption === "optionOne"}
                        onChange={this.handleChange}
                      />
                      <br />
                      <Radio
                        label={question.optionTwo.text}
                        name="radioGroup"
                        value="optionTwo"
                        checked={this.state.selectedOption === "optionTwo"}
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Button
                        color="green"
                        size="tiny"
                        positive
                        content="Submit"
                      />
                    </Form.Field>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    );
  }
}
function mapStateToProps({ questions, authUser, users }, { match }) {
  let question;
  if (questions && authUser && users) {
    const { questionId } = match.params;
    question = questions[questionId];
    const author = users[question.author];
    return {
      question,
      authUser,
      author
    };
  }
  return {};
}

export default connect(mapStateToProps)(AnsweForQuestion);
