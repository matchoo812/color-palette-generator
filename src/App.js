import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorVariants";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[3]));
    return (
      <div className="App">
        <Palette {...seedColors[3]} />
      </div>
    );
  }
}

export default App;
