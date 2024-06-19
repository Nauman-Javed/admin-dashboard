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
  firebase,
  mysql,
  nextjs,
  postman,
  reactrouter,
  tailwindcss,
  typescript,
} from "../assets/Icons";
import styled from "@emotion/styled";

const Icons = [
  { id: 1, name: html },
  { id: 2, name: css },
  { id: 3, name: javascript },
  { id: 4, name: typescript },
  { id: 5, name: react },
  { id: 6, name: nextjs },
  { id: 7, name: redux },
  { id: 8, name: reactrouter },
  { id: 9, name: bootstrap5 },
  { id: 10, name: materialUI },
  { id: 11, name: tailwindcss },
  { id: 12, name: vsCode },
  { id: 13, name: git },
  { id: 14, name: github },
  { id: 15, name: firebase },
  { id: 16, name: sass },
  { id: 17, name: postman },
  { id: 18, name: mysql },
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
            xs: "250px",
            md: "none",
          },
        }}
      >
        <Stack mb={10} textAlign={"center"}>
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
              fontSize: {
                xs: "16px",
                sm: "20px",
              },
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
                  alt="project thumbnail"
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
