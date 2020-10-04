export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },

  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#292f31",
    },
  },

  slider: {
    width: "400px",
    margin: "5px 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active": {
      backgroundColor: "lightseagreen",
      outline: "none",
      border: "2px solid lightseagreen",
      height: "13px",
      width: "13px",
      marginLeft: "-5px",
      marginTop: "-3px",
    },
    "& .rc-slider-track": {
      background: "transparent",
    },
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1.5rem",
  },
};
