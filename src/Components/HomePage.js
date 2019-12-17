import React, { Component } from "react";
import { Grid, Tab, Menu, Label } from "semantic-ui-react";
import UserInformation from "./UserInformation";
import { connect } from "react-redux";

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
    const { questions, length } = this.props;
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
function mapStateToProps({ questions }) {
  return {
    questions,
    length: questions.length
  };
}

export default connect(mapStateToProps)(HomePage);
