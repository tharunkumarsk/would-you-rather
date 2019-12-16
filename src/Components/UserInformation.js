import React, { Component } from "react";
import { Header, Segment, Grid, Image } from "semantic-ui-react";

class UserInformation extends Component {
  render() {
    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          Jeevitha asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image src="https://image.flaticon.com/icons/png/512/145/145843.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default UserInformation;
