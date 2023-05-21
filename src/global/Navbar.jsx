import {
  AppBar,
  Box,
  IconButton,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../theme";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Links } from "../data/Constants";

const Navbar = () => {
  const { background, linear, subHeading, mode, setMode } = useTheme();
  const [value, setValue] = useState("Home");

  const StyledAppbar = styled(AppBar)({
    boxShadow: "none",
    position: "sticky",
    backgroundColor: background,
  });

  const modeHandler = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <>
      <StyledAppbar>
        <Toolbar sx={{ paddingX: "0 !important" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color={linear}>
            Nauman Javed Qureshi
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Box display={"flex"} alignItems={"center"}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="primary"
              >
                {Links.map((link, ind) => (
                  <Tab
                    value={link.name}
                    label={link.name}
                    id={ind}
                    href={`#${link.link}`}
                  >
                    {link.name}
                  </Tab>
                ))}
              </Tabs>
            </Box>
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
