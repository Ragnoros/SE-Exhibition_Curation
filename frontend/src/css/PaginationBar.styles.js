export const paginationBar = {
  bar: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    bgcolor: "background.paper",
    py: 2,
    boxShadow: 4,
    backgroundColor: "rgb(60, 88, 107)",
    borderTop: "0.5px solid #A3C6C4",
  },
  navigaton: {
    "& .MuiPaginationItem-root": { color: "#F7F0C3" }, // Default text color
    "& .Mui-selected": { backgroundColor: "#D68D85", color: "#F7F0C3" }, // Selected page styling
    "& .MuiPaginationItem-ellipsis": { color: "#888" }, // Ellipsis color
    "& .MuiPaginationItem-icon": { color: "#F7F0C3" }, // Arrows color
  },
};
