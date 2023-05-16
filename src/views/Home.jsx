import { Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Home = () => {
  const { heading, linear } = useTheme();
  return (
    <>
      <Container maxWidth={"xl"} sx={{ height: "93vh", paddingY: "260px" }}>
        <Typography variant="h2" color={heading} fontWeight={"bold"}>
          Hi,
          <br />
          My name is
          <br />
          <span style={{ color: linear }}> Nauman Javed Qureshi</span>
          <br />I am a Front-End Developer
        </Typography>
      </Container>
    </>
  );
};

export default Home;
