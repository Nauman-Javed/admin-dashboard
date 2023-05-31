import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import classes from "../styles/TechStack/TechStack.module.css";
import { bootstrap, css, github, html, js, react, sass } from "../assets/Icons";

const Icons = [
  { id: 1, name: html },
  { id: 2, name: css },
  { id: 3, name: js },
  { id: 4, name: react },
  { id: 5, name: bootstrap },
  { id: 6, name: sass },
  { id: 7, name: github },
];

const TechStack = () => {
  const { heading, subHeading, mode } = useTheme();

  return (
    <>
      <Box
        id="techStack"
        sx={{
          height: "auto",
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
