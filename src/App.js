import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorVariants";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List Goes Here</h1>} />
        <Route exact path="/palette/:id" render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        {/* generatePalette(this.findPalette(routeProps.match.params.id))} />}  */}
        {/* <Palette palette={generatePalette(seedColors[1])} /> */}
      </Switch>
    );
  }
}

export default App;
