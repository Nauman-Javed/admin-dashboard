import { Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../../theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  StyledAppbar,
  StyledLinks,
} from "../../components/CustomStyledComponents";
import { NAV_LINKS } from "../../data/mockData";

const Navbar = () => {
  const { background, linear, subHeading, mode, setMode } = useTheme();

  const modeHandler = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const scrollHandler = (scroll) => {
    window.scrollTo({
      top: scroll,
    });
  };

  return (
    <>
      <StyledAppbar backgroundColor={background}>
        <Toolbar
          sx={{
            paddingX: "0 !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "block" },
                color: linear,
                cursor: "default",
              }}
            >
              Nauman Javed Qureshi
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <StyledLinks>
              {NAV_LINKS.map((link, id) => (
                <Box
                  key={id}
                  sx={{
                    marginRight: 6,
                    cursor: "pointer",
                  }}
                  onClick={() => scrollHandler(link.scroll)}
                >
                  <Link variant="body1" underline="none" color={subHeading}>
                    {link.name}
                  </Link>
                </Box>
              ))}
            </StyledLinks>
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
