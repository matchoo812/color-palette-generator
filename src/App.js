import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
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
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route exact path="/" render={routeProps => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path="/palette/:id" render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId" render={routeProps => <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />} />
      </Switch>
    );
  }
}

export default App;
