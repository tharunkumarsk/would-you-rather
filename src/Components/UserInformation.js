import React, { Component } from "react";
import { Header, Segment, Grid, Image } from "semantic-ui-react";
import QuestionList from "./QuestionList";

class UserInformation extends Component {
  render() {
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          Jeevitha asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src="https://image.flaticon.com/icons/png/512/145/145843.png" />
            </Grid.Column>
            <QuestionList />
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default UserInformation;
