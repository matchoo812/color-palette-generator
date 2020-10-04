import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/core/styles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  // change state to animate copied color, reset after 1.5s
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { background, name, moreUrl, showFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <div className={classes.ColorBox} style={{ background }}>
        <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }} />
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={classes.copyButton}>Copy</button>
          </CopyToClipboard>
        </div>
        {showFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ColorBox);
