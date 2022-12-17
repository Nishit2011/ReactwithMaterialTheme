import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Child from "./Child";

console.log(theme);
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Child />
      </ThemeProvider>
    </div>
  );
}

export default App;
