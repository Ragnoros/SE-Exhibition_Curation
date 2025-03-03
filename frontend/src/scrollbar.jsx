import { GlobalStyles } from "@mui/system";

export const globalStyles = (
  <GlobalStyles
    styles={{
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "rgb(163, 198, 196)",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#3C586B",
        borderRadius: "0px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#3C586B",
      },
    }}
  />
);
