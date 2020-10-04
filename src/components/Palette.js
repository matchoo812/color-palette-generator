import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => <ColorBox background={color[format] || color.hex} name={color.name} key={color.id} moreUrl={`/palette/${id}/${color.id}`} showFullPalette />);
    return (
      <div className={classes.Palette}>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showSlider />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
