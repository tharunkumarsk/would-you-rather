import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";
import HomePage from "./HomePage";
import AnsweForQuestion from "./AnsweForQuestion";
import { connect } from "react-redux";
import { handlePageLoadData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

class App extends React.Component {
  componentDidMount = () => {
    this.props.handlePageLoadData();
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
            <NavBar />
            <LoadingBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={DashBoard} />
              <Route path="/questions/123" component={AnsweForQuestion} />
            </Switch>
          </Container>
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
