import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

import { alpha, InputBase, styled } from "@mui/material";

import logo from "../static/images/logo.png";
import { ColorButton } from "../App";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const pages = ["Destination", "Hotels", "Contact"];

const Navbar = ({ type }) => {
  const { user, handleSignOut } = useFirebase();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Box className="">
      <AppBar position="static" color="transparent" sx={{ padding: 2 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                className={type === "home" ? "logo" : "login-logo"}
              />
            </Link>
            {type === "home" && (
              <Search className="search">
                <SearchIconWrapper>
                  <SearchIcon className="icon" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search your destination"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            )}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "none" },
                textAlign: "right",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon className={type === "home" ? "icon" : "logo-icon"} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  marginTop: "1rem",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
                <ColorButton
                  variant="contained"
                  // onClick={handleSignOut}
                  sx={{
                    my: 1,
                    mx: 2,
                    fontSize: 12,
                    letterSpacing: ".1rem",
                  }}
                >
                  {type === "login" ? (
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      Register
                    </Link>
                  ) : (
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Login
                    </Link>
                  )}
                </ColorButton>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    display: "block",
                    fontSize: 13,
                    letterSpacing: ".2rem",
                  }}
                >
                  <Link
                    to="/profile"
                    style={{
                      textDecoration: "none",
                      color: type === "home" ? "white" : "black",
                    }}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
              <ColorButton
                sx={{
                  my: 2,
                  mx: 1,
                  fontSize: 13,
                  display: "block",
                  letterSpacing: ".1rem",
                }}
              >
                {type === "login" ? (
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                ) : type === "logout" && user ? (
                  <Link
                    onClick={() => handleSignOut(localStorage.removeItem('user'))}
                    to="/login"
                    style={{ textDecoration: "none" }}
                  >
                    Logout

                  </Link>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                )}
              </ColorButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
