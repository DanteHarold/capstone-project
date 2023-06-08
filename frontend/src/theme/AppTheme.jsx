import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { whiteTheme } from "./whiteTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={whiteTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
