import React from "react";
import { Divider, Grid, Segment, Form } from "semantic-ui-react";

const NewQuestion = () => (
  <Grid columns={1} padded textAlign="center">
    <Grid.Column width={8}>
      <Segment placeholder>
        <h3>Crteate you Question here !</h3>
        <p>
          <strong>Would you rather...</strong>
        </p>
        <Form>
          <Form.Input id="option1" placeholder="Enter option one..." required />
          <Divider horizontal>Or</Divider>
          <Form.Input id="option2" placeholder="Enter option two..." required />
          <Form.Button positive size="tiny" fluid>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default NewQuestion;
