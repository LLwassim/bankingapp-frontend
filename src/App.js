import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserSettings from "./pages/UserSettings";
import SignUpPage from "./pages/SignUpPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // Set your desired blue color
    },
    background: {
      default: "#fff", // Set the background color to white
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/bankingapp-frontend">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user-settings" element={<UserSettings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
