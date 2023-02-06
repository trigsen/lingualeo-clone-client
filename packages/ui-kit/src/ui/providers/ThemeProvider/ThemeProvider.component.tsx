import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import React from "react";

const createTheme = () => {
  return createMuiTheme({
    palette: {},
  });
};

const ThemeProviderComponent: React.FC = ({ children }) => {
  const theme = createTheme();
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export const ThemeProvider = React.memo(ThemeProviderComponent);
