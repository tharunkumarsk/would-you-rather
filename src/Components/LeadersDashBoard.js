import React, { Component, Fragment } from "react";
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider
} from "semantic-ui-react";

export class LeadersDashBoard extends Component {
  render() {
    return (
      <Fragment>
        <Grid columns={1} padded textAlign="center">
          <Grid.Column width={8}></Grid.Column>
          <Segment.Group>
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={2} verticalAlign="middle">
                  <Image src="https://image.flaticon.com/icons/png/512/145/145843.png" />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as="h3" textAlign="left">
                    Tharun
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>10</Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>5</Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
                        10
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        </Grid>
      </Fragment>
    );
  }
}

export default LeadersDashBoard;
