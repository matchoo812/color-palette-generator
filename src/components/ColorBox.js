import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

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
    const { background, name, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDark = chroma(background).luminance() <= 0.085;
    const isLight = chroma(background).luminance() >= 0.75;

    return (
      <div className="ColorBox" style={{ background }}>
        <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p className={`${isLight && "dark-text"}`}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDark && "light-text"}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={`copy-button ${isLight && "dark-text"}`}>Copy</button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isLight && "dark-text"}`}>More</span>
          </Link>
        )}
      </div>
    );
  }
}

export default ColorBox;
