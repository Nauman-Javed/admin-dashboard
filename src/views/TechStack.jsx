import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import classes from "../styles/TechStack/TechStack.module.css";
import {
  bootstrap5,
  css,
  git,
  gitHub,
  html,
  javascript,
  materialUI,
  react,
  redux,
  sass,
  vsCode,
} from "../assets/Icons";

const Icons = [
  { id: 1, name: html },
  { id: 2, name: css },
  { id: 3, name: javascript },
  { id: 4, name: react },
  { id: 5, name: redux },
  { id: 6, name: bootstrap5 },
  { id: 7, name: sass },
  { id: 8, name: materialUI },
  { id: 9, name: git },
  { id: 10, name: gitHub },
  { id: 11, name: vsCode },
];

const TechStack = () => {
  const { heading, subHeading, mode } = useTheme();

  return (
    <>
      <Box
        id="techStack"
        sx={{
          minHeight: "100vh",
          width: "100%",
          marginTop: {
            xs: "50px",
            md: "none",
          },
        }}
      >
        <Stack
          marginBottom={{
            xs: 10,
            md: 30,
          }}
          textAlign={"center"}
        >
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
              <Grid item xs={2} key={icon.id}>
                <img
                  src={icon.name}
                  alt=""
                  height={"104px"}
                  className={mode === "light" && classes.shadow}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TechStack;
