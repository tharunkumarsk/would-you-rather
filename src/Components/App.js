import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";
import HomePage from "./HomePage";
import AnsweForQuestion from "./AnsweForQuestion";
import { connect } from "react-redux";
import { handlePageLoadData } from "../Actions/shared";

class App extends React.Component {
  componentDidMount = () => {
    this.props.handlePageLoadData();
  };
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Container>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={DashBoard} />
            <Route path="/questions/123" component={AnsweForQuestion} />
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
