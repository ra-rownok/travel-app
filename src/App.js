import { Button, createTheme, styled, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <SignOut />
              </RequireAuth>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
