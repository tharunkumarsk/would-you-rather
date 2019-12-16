import React from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <NavBar />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
