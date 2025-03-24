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
    "& .MuiPaginationItem-root": { color: "#F7F0C3" },
    "& .Mui-selected": {
      background: "linear-gradient(180deg, #E89B94 0%, #D68D85 100%)",
      color: "#F7F0C3, !important",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      border: "2px solid #B85C5C",
      transform: "translateY(-2px)",
    },
  },
  "& .MuiPaginationItem-ellipsis": { color: "#888" },
  "& .MuiPaginationItem-icon": { color: "#F7F0C3" },
};
