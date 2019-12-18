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

class App extends React.Component {
  componentDidMount = () => {
    this.props.handlePageLoadData();
  };
  render() {
    const { authUser } = this.props;

    return (
      <BrowserRouter>
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
                  <Route path="/questions/123" component={AnsweForQuestion} />
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

export default connect(mapStateToProps, { handlePageLoadData })(App);
