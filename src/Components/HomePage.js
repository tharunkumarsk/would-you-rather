import React, { Component } from "react";
import { Grid, Tab, Menu, Label } from "semantic-ui-react";
import UserInformation from "./UserInformation";
import { connect } from "react-redux";

const panes = allQuestions => {
  debugger;
  return [
    {
      menuItem: (
        <Menu.Item key="Unanswered">
          Unanswered
          <Label color="red">{allQuestions.unAnsweredQuestions.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          {allQuestions.unAnsweredQuestions.map(question => (
            <UserInformation
              key={question.id}
              questionId={question.id}
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
          Answered
          <Label color="green">{allQuestions.answeredQuestions.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane attached={false}>
          {allQuestions.answeredQuestions.map(question => (
            <UserInformation
              key={question.id}
              questionId={question.id}
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
          {questions &&
          questions.answeredQuestions &&
          questions.unAnsweredQuestions ? (
            <Tab
              menu={{ pointing: true, fluid: true, widths: 2, color: "red" }}
              panes={panes(questions)}
            />
          ) : null}
        </Grid.Column>
      </Grid>
    );
  }
}
function mapStateToProps({ authUser, users, questions }) {
  let answeredQuestions, unAnsweredQuestions;
  //As user list response has the answers which means those question Ids comes under answered segment

  let answeredQuestionIds = null;
  if (authUser && users) {
    answeredQuestionIds = Object.keys(users["tylermcginnis"].answers);
    answeredQuestions = Object.values(questions).filter(
      question => !answeredQuestionIds.includes(question.id)
    );
    unAnsweredQuestions = Object.values(questions).filter(question =>
      answeredQuestionIds.includes(question.id)
    );
    return {
      questions: {
        answeredQuestions,
        unAnsweredQuestions
      }
    };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(HomePage);
