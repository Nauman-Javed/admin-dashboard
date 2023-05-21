import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

import { bootstrap, css, github, html, js, react, sass } from "../assets/Icons";

const Icons = [html, css, js, react, bootstrap, sass, github];

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
            {Icons.map((icon) => (
              <Grid item xs={2}>
                <img src={icon} alt="" height={"104px"} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TechStack;
