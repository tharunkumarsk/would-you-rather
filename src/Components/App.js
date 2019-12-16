import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";
import HomePage from "./HomePage";
import AnsweForQuestion from "./AnsweForQuestion";

function App() {
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

export default App;
