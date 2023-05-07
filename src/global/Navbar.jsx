import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  const { background, heading, subHeading, mode, setMode } = useTheme();

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
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color={heading}>
            Nauman Javed Qureshi
          </Typography>
          <Box>
            <IconButton>
              <GitHubIcon sx={{ color: subHeading }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: subHeading }} />
            </IconButton>
            <IconButton onClick={modeHandler}>
              {mode === "light" ? (
                <LightModeIcon sx={{ color: subHeading }} />
              ) : (
                <DarkModeIcon sx={{ color: subHeading }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Navbar;
