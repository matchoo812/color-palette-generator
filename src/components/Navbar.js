import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Select, Snackbar, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import Slider from "rc-slider";

import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">paletteMaker</Link>
        </div>
        {showSlider && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
              <Close />
            </IconButton>,
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
