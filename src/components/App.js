import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";
import HomePage from "./HomePage";
import AnsweForQuestion from "./AnsweForQuestion";
import { connect } from "react-redux";
import { handlePageLoadData } from "../actions/shared";
import Login from "./Login";
import LoadingBar from "react-redux-loading";
import Page404 from "./404Page";

class App extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(handlePageLoadData());
  };
  render() {
    const { authUser } = this.props;

    return (
      <BrowserRouter>
        <LoadingBar />
        <div className="App">
          {authUser === null ? (
            <Route render={() => <Login />} />
          ) : (
            <Fragment>
              <Container>
                <NavBar />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={DashBoard} />
                  <Route
                    path="/questions/404Page"
                    component={Page404}
                  />
                  <Route
                    path="/questions/:questionId"
                    component={AnsweForQuestion}
                  />
                  <Route component={Page404} />
                </Switch>
              </Container>
            </Fragment>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(App);
