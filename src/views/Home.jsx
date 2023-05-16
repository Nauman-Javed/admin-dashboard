import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Home = () => {
  const { heading, linear } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "93vh",
          display: "flex",
          alignItems: "center",
          background: "red",
        }}
      >
        <Typography variant="h2" color={heading} fontWeight={"bold"}>
          Hi,
          <br />
          My name is
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
          >
            {" "}
            Nauman Javed Qureshi
          </span>
          <br />I am a Front-End Developer
        </Typography>
      </Box>
    </>
  );
};

export default Home;
