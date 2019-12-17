import React, { Component } from "react";
import { Header, Button, Grid } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export class QuestionList extends Component {
  state = {
    answering: false
  };

  handleClick = () => {
    this.setState({
      answering: true
    });
  };

  render() {
    const { question, answered, btnContent } = this.props;
    const color = answered === true ? "green" : "red";
    const orColor = answered === true ? "red" : "green";

    if (this.state.answering === true) {
      return <Redirect push to="/questions/123" />;
    }

    return (
      <Grid.Column width={12}>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: "center" }}>
          {question.optionOne.text}
          <br />
          <br />
          <Button circular color={orColor} content="OR" />
        </p>
        <p style={{ textAlign: "center" }}>{question.optionTwo.text}</p>
        <Button
          color={color}
          size="medium"
          fluid
          content={btnContent}
          onClick={this.handleClick}
        />
      </Grid.Column>
    );
  }
}

export default QuestionList;
