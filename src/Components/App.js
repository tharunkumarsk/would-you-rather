import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import DashBoard from "./LeadersDashBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <NavBar />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={DashBoard} />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
