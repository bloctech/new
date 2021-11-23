import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
