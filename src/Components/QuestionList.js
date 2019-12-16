import React, { Component } from "react";
import { Header, Button, Grid } from "semantic-ui-react";

export class QuestionList extends Component {
  render() {
    const { answered, btnContent } = this.props;
    const color = answered === true ? "green" : "red";
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
        <Button color={color} size="medium" fluid content={btnContent} />
      </Grid.Column>
    );
  }
}

export default QuestionList;
