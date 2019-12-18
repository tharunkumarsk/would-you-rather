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

class AnsweForQuestion extends Component {
  state = {
    selectedOption: ""
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedOption: value });
  };

  render() {
    const { question, user } = this.props;
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
                  <Image src={user.avatarURL} />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header as="h4">Would you rather</Header>
                  <Form>
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
  let question, user;
  if (questions && authUser && users) {
    const { questionId } = match.params;
    question = questions[questionId];
    user = users[authUser];
    return {
      question,
      user
    };
  }
  return {};
}

export default connect(mapStateToProps)(AnsweForQuestion);
