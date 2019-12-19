import React, { Component } from "react";
import { Grid, Tab, Menu, Label } from "semantic-ui-react";
import UserInformation from "./UserInformation";
import { connect } from "react-redux";
/**
 * This is the pannel displayed for answered and unanswered questions
 * And also the content inside the pannel will be rendered by child component
 * @param {object that contains answered and unanswered questions as array} allQuestions
 */
const panes = allQuestions => {
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

class HomePage extends Component {
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
/**
 * Filter the answered question from question list
 * @param {all the answered IDs of the user} ids
 * @param {list of all question} questions
 */

function getAnsweredQuestions(ids, questions) {
  return Object.values(questions)
    .filter(question => ids.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Filter the unanswered question from question list
 * @param {all the answered IDs of the user} ids
 * @param {list of all question} questions
 */

function getUnansweredQuestions(ids, questions) {
  return Object.values(questions)
    .filter(question => !ids.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
}

function mapStateToProps({ authUser, users, questions }) {
  let answeredQuestions,
    unAnsweredQuestions,
    answeredQuestionIds = null;
  /**
   * As user list response has the answers
   * which means those question IDs comes under answered segment
   * So get the those question IDs  (answeredQuestionIds)
   * And filter it form qustion list response
   */

  answeredQuestionIds = Object.keys(users[authUser].answers);

  answeredQuestions = getAnsweredQuestions(answeredQuestionIds, questions);

  unAnsweredQuestions = getUnansweredQuestions(answeredQuestionIds, questions);
  return {
    questions: {
      answeredQuestions,
      unAnsweredQuestions
    }
  };
}

export default connect(mapStateToProps)(HomePage);
