import { GlobalStyles } from "@mui/system";

export const globalStyles = (
  <GlobalStyles
    styles={{
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "rgba(17, 25, 40, 0.95)",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#3C586B",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#3C586B",
      },
    }}
  />
);
