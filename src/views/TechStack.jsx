import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import classes from "../styles/TechStack/TechStack.module.css";
import {
  bootstrap5,
  html,
  css,
  javascript,
  react,
  redux,
  sass,
  materialUI,
  git,
  github,
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
  { id: 10, name: github },
  { id: 11, name: vsCode },
];

const TechStack = () => {
  const { heading, subHeading, mode } = useTheme();

  return (
    <>
      <Box
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
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: heading,
              marginBottom: 2,
              cursor: "default",
            }}
          >
            My Tech Stack
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: subHeading,
              cursor: "default",
            }}
          >
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
                  width={"120px"}
                  height={"120px"}
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
