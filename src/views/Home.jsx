import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Home = () => {
  const { heading, linear } = useTheme();
  return (
    <>
      <Toolbar>
        <Box sx={{ height: "93vh", paddingTop: "250px" }}>
          <Typography variant="h2" color={heading} fontWeight={"bold"}>
            Hi,
            <br />
            My name is
            <br />
            <span style={{ color: linear }}> Nauman Javed Qureshi</span>
            <br />I am a Front-End Developer
          </Typography>
        </Box>
      </Toolbar>
    </>
  );
};

export default Home;
