import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
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
    ]
  };

  removeCharacter = charIndex => {
    console.log("Removing character...", charIndex);
    const { characters } = this.state;
    console.log(characters);
    this.setState({
      characters: characters.filter((entry, index) => {
        // console.log(index);
        console.log(index !== charIndex);
        return index !== charIndex;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Table
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default App;
