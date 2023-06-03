import { Box, styled } from "@mui/material";

export const StyledLinks = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));
