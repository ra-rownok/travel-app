import { Box, Grid, Paper, styled, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { ColorButton } from "../App";
import { Link } from "react-router-dom";


const Section = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: 300,
    width: 500,
  },
}));

const LeftSection = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
}));



const Main = () => {
  const [spacing, setSpacing] = React.useState(4);
  const [value, setValue] = useState(new Date(""));
  const [checkout, setCheckout] = useState(new Date(""));

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          mt={15}
          rowSpacing={spacing}
          columnSpacing={12}
        >
          <Grid item>
            <Section
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <LeftSection
                sx={{
                  variant: "h1",
                  color: "white",
                  fontWeight: 600,
                  fontFamily: "Gloria",
                  fontSize: "5rem",
                  letterSpacing: -6,
                }}
              >
                COX'S BAZAR
              </LeftSection>
              <Typography variant="body1" color="lightgray">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </Typography>
            </Section>
          </Grid>
          <Grid item>
            <Box
              backgroundColor="white"
              padding={2}
              borderRadius={2}
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "40ch" },
                height: 300,
                width: 360,
              }}
            >
              <Box sx={{ display: "grid", gridGap: "25px" }}>
                <TextField
                  sx={{
                    backgroundColor: grey[100],
                  }}
                  label="Origin"
                  id="outlined-required"
                  defaultValue="Dhaka"
                />
                <TextField
                  sx={{ backgroundColor: grey[100] }}
                  label="Destination"
                  id="outlined-required"
                  defaultValue="Cox's Bazar"
                />
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <DesktopDatePicker
                    label="From"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopDatePicker
                    label="To"
                    inputFormat="MM/dd/yyyy"
                    value={checkout}
                    onChange={(newValue) => setCheckout(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
                <ColorButton
                  sx={{
                    flexGrow: 1,
                    padding: "10px",
                    borderRadius: "5px",
                    letterSpacing: ".2rem",
                  }}
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Start Booking
                  </Link>
                </ColorButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
