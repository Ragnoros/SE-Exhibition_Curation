export const exhibitStyles = {
  card: {
    background: "rgb(247, 240, 195)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    height: "400px",
    width: "100%",
    minWidth: "250px",
    margin: "0 auto",
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    border: "2px solid rgb(163, 198, 196)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4), 0 0 0 2px rgb(163, 198, 196)",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow:
        "0 12px 30px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(78, 204, 163, 0.3)",
      border: "2px solid rgba(78, 204, 163, 0.4)",
      "& .MuiCardMedia-root": {
        transform: "scale(1.08)",
      },
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
    padding: "1rem",
    width: "100%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      padding: "0.5rem",
    },
  },
  mainContent: {
    flex: 1,
    padding: "2rem",
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    "@media (max-width: 768px)": {
      marginLeft: 0,
      marginTop: "2rem",
      width: "100%",
    },
  },
};
