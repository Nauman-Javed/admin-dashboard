import { Box, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import bootstrap from "../assets/Icons/bootstrap.png";
import html from "../assets/Icons/html.png";
import css from "../assets/Icons/css.png";
import javascript from "../assets/Icons/js.png";
import sass from "../assets/Icons/sass.png";
import github from "../assets/Icons/github.png";
import react from "../assets/Icons/react.png";

const Image = [bootstrap, html];

const TechStack = () => {
  const { heading, subHeading } = useTheme();

  return (
    <>
      <Box height={"100vh"} width={"100%"} id="techStack">
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
    </>
  );
};

export default TechStack;
