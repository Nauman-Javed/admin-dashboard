import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  const { background, linear, subHeading, mode, setMode } = useTheme();

  const StyledAppbar = styled(AppBar)({
    boxShadow: "none",
    position: "sticky",
    backgroundColor: background,
  });

  const modeHandler = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <StyledAppbar>
        <Toolbar sx={{ paddingX: "0 !important" }}>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              color: linear,
            }}
          >
            Nauman Javed Qureshiasd
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{
              flexGrow: 1,
              color: linear,
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            NJQ
          </Typography>

          <Box display={"flex"} alignItems={"center"}>
            <Box>
              <IconButton>
                <Link href="https://github.com/Nauman-Javed">
                  <GitHubIcon sx={{ color: subHeading }} />
                </Link>
              </IconButton>
              <IconButton>
                <Link href="https://www.linkedin.com/in/nauman-javed-268162210/">
                  <LinkedInIcon sx={{ color: subHeading }} />
                </Link>
              </IconButton>
              <IconButton onClick={modeHandler}>
                {mode === "light" ? (
                  <LightModeIcon sx={{ color: subHeading }} />
                ) : (
                  <DarkModeIcon sx={{ color: subHeading }} />
                )}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Navbar;
