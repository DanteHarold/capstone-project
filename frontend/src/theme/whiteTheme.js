import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const whiteTheme = createTheme({
  palette: {
    primary: {
      main: "#F1F3F6",
    },
    secondary: {
      main: "#414143",
    },
    error: {
      main: red.A200,
    },
  },
});
