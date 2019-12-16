import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={DashBoard} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
