import React, { Component } from "./node_modules/react";
import { Grid, Tab, Menu, Label } from "./node_modules/semantic-ui-react";
import UserInformation from "./UserInformation";
import { connect } from "./node_modules/react-redux";

const panes = allQuestions => {
  return [
    {
      menuItem: (
        <Menu.Item key="Unanswered">
          Unanswered<Label color="red">10</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          {Object.keys(allQuestions).map(question => (
            <UserInformation
              key={question}
              questionId={question}
              question={question}
              answered={false}
              btnContent="Answer"
            />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key="Answered">
          Answered<Label color="green">10</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          {Object.keys(allQuestions).map(question => (
            <UserInformation
              key={question}
              questionId={question}
              question={question}
              answered={true}
              btnContent="View Result"
            />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

export class HomePage extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Grid columns={1} centered>
        <Grid.Column width={10}>
          <Tab
            menu={{ pointing: true, fluid: true, widths: 2, color: "red" }}
            panes={panes(questions)}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
function mapStateToProps({ authUser, users, questions }) {
  console.log("authUser--------" + authUser);
  console.log("users--------" + users);
  //As user list response has the answers which means those question Ids comes under answered segment

  //const answeredQuestionIds = Object.keys(users[authUser].answers);

  return {
    questions
  };
}

export default connect(mapStateToProps)(HomePage);
