import React from "react";
import { Form, Grid, Segment, Header } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src: "https://image.flaticon.com/icons/png/512/145/145843.png"
    }
  }
];

const Login = () => (
  <Grid columns={1} padded small textAlign="center">
    <Grid.Column width={8}>
      <Header as="h4" block attached="top" textAlign="center">
        <Header.Content>Welcome to the Would You Rather App!</Header.Content>
        <Header.Subheader>Please log in to continue</Header.Subheader>
      </Header>
      <Segment placeholder>
        <Form>
          <Header as="h2" color="green">
            Select Your Name!!!
          </Header>
          <Form.Dropdown
            placeholder="Select Your name"
            fluid
            selection
            options={friendOptions}
            required
          />
          <Form.Button content="Login" positive fluid />
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default Login;
