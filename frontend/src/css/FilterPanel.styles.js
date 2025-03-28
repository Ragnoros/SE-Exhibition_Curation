export const filterStyles = {
  panel: {
    overflowY: "auto",
    width: "15vw",
    background: "rgb(60, 88, 107)",
    top: 60,
    height: "94%",
    borderRight: "0.5px solid #A3C6C4",
    boxShadow: 4,
    position: "fixed",
    pl: 3,
    pt: 2,
    zIndex: 1000,
  },
  form: {
    width: 230,
    m: 1,
    background: "#A3C6C4",
    borderRadius: "16px",
    outline: "0px",
    border: "0px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
};
