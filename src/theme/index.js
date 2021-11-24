import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  palette: {
    common: {
      white: "#E9FBFA",
    },
    primary: {
      main: "#48007C",
      light: "#F3F4F7",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#AD00FF",
      contrastText: "#48007C",
    },
  },
});
theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Lato",
        backgroundColor: "#ffffff",
        color: "#000000",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);
export default theme;
