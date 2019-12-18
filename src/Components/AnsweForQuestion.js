import React, { Component } from "./node_modules/react";
import {
  Header,
  Segment,
  Grid,
  Image,
  Button,
  Form,
  Radio
} from "./node_modules/semantic-ui-react";

class AnsweForQuestion extends Component {
  render() {
    return (
      <Grid columns={2} padded textAlign="center">
        <Grid.Column width={8}>
          <Segment.Group>
            <Header as="h5" textAlign="left" block attached="top">
              Jeevitha asks:
            </Header>
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Image src="https://image.flaticon.com/icons/png/512/145/145843.png" />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header as="h4">Would you rather</Header>
                  <Form>
                    <Form.Field>
                      <Radio
                        label="Choose testing"
                        name="radioGroup"
                        value="optionOne"
                        checked={true}
                      />
                      <br />
                      <Radio
                        label="Developement"
                        name="radioGroup"
                        value="optionTwo"
                        checked={false}
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

export default AnsweForQuestion;
