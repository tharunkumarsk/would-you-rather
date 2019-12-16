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
    const { answered, btnContent } = this.props;
    const color = answered === true ? "green" : "red";

    if (this.state.answering === true) {
      return <Redirect push to="/questions/123" />;
    }

    return (
      <Grid.Column width={12}>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: "center" }}>
          choose testing
          <br />
          or...
        </p>
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
