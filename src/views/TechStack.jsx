import { Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";

const TechStack = () => {
  const { background, heading, subHeading, mode, setMode } = useTheme();

  return (
    <Toolbar>
      <Box height={"100vh"} width={"100%"}>
        <Stack mb={20}>
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={2}>
            My Tech Stack
          </Typography>
          <Typography variant="h6" color={subHeading}>
            Technologies I've been working with recently
          </Typography>
        </Stack>
        <Box textAlign={"center"}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 10, lg: 12 }}
            rowGap={5}
          >
            <Grid item xs={2}>
              <img src={bootstrap} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={html} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={css} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={javascript} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={react} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={sass} alt="" height={"104px"} />
            </Grid>
            <Grid item xs={2}>
              <img src={github} alt="" height={"104px"} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default TechStack;
