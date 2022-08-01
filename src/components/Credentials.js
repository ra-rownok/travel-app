import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ColorButton } from "../App";
import useFirebase from "../hooks/useFirebase";
import facebook from "../static/images/fb.png";
import google from "../static/images/google.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Credentials = ({ type }) => {
  const { user, signInWithGoogle } = useFirebase();
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
   !user  &&
    <>
      <Box
        sx={{
          maxHeight: "550px",
          width: "500px",
          border: "2px solid lightgray",
          m: "auto",
          mt: 5,
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Grid>
          <Grid item>
            <Typography variant="h5" color="black" fontWeight={600} p={3}>
              {type === "signIn" ? "Login" : "Create an Account"}
            </Typography>
          </Grid>
          <Grid item mx={4}>
            {type === "registration" ? (
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                fullWidth
              />
            ) : null}
            {type === "registration" ? (
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                fullWidth
                margin="normal"
              />
            ) : null}
            <TextField
              id="standard-basic"
              label="Username or Email"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              fullWidth
              margin="normal"
            />
            {type === "registration" ? (
              <TextField
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                fullWidth
                margin="normal"
              />
            ) : null}
            {type === "signIn" ? (
              <Grid
                item
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item display="flex" alignItems="center">
                  <Checkbox {...label} size="small" />
                  <Typography variant="subtitle1">Remember Me</Typography>
                </Grid>
                <Grid item>
                  <Link to="" style={{ color: "orange" }}>
                    Forgot Password
                  </Link>
                </Grid>
              </Grid>
            ) : null}
            <Grid item mt={4} display="block">
              <ColorButton fullWidth>
                {type === "signIn" ? "Login" : "Register"}
              </ColorButton>
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={2}
            >
              <Typography variant="subtitle" mr={1}>
                {type === "signIn"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Typography>
              {type === "signIn" ? (
                <Link to="/signup" style={{ color: "orange" }}>
                  Create an account
                </Link>
              ) : (
                <Link to="/login" style={{ color: "orange" }}>
                  Login
                </Link>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3} textAlign="center">
        ---------------------------- Or ----------------------------
      </Box>
      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        <Button
          sx={{
            width: "400px",
            borderRadius: "30px",
            justifyContent: "space-around",
            color: "black",
          }}
          variant="outlined"
        >
          <img src={facebook} alt="" height="40px" width="40px" /> Continue with
          Facebook
        </Button>
        <Button
          sx={{
            width: "400px",
            borderRadius: "30px",
            mt: 1,
            justifyContent: "space-around",
            color: "black",
          }}
          variant="outlined"
          onClick={handleGoogleSignIn}
        >
          <img src={google} alt="" height="40px" width="40px" />
          Continue With Google
        </Button>
      </Box>
    </>
  );
};

export default Credentials;
