export const navStyles = {
  bar: {
    overflow: "hidden",
    width: "100vw",
    top: 0,
    position: "fixed",
    background: "rgb(60, 88, 107)",
    height: "60px",
    borderBottom: "0.5px solid #A3C6C4",
    zIndex: 1000,
  },
  iconLayout: {
    fontSize: "verylarge",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "left",
  },

  loginLayout: {
    fontSize: "verylarge",
    display: "flex",
    height: "100%",
    right: "330px",
    alignItems: "center",
    justifyContent: "right",
  },
  searchLayout: {
    width: 500,
    maxWidth: "100%",
    background: "#A3C6C4",
    borderRadius: "16px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  // searchButton: {
  //   borderRadius: "16px",
  // },
};
