import { AppBar } from "@mui/material";
import styled from "@emotion/styled";

export const StyledAppbar = styled(AppBar)(({ backgroundColor }) => ({
  boxShadow: "none",
  position: "sticky",
  backgroundColor: backgroundColor,
}));
