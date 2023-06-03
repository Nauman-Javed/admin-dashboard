import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Home = () => {
  const { heading } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "93vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: heading,
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            cursor: "default",
          }}
        >
          Hi,
          <br />
          My name is
          <br />
          <span
            style={{
              background:
                "linear-gradient(to right, #15B4FA 20%, #E70FAA 100%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
          >
            Nauman Javed Qureshi
          </span>
          <br />I am a Front-End Developer
        </Typography>
      </Box>
    </>
  );
};

export default Home;
