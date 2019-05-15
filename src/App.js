import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Drug Dealer"
      },
      {
        name: "Jennifer",
        job: "Actress"
      },
      {
        name: "Russell",
        job: "Bouncer"
      }
    ];
    return (
      <div className="App">
        <div className="container">
          <Table characterData={characters} />
        </div>
      </div>
    );
  }
}

export default App;
