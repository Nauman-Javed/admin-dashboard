import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Contact = () => {
  const { heading, linear } = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: heading,
              mb: 2,
              textAlign: {
                xs: "center",
                md: "left",
              },
              cursor: "default",
            }}
          >
            Lets work together mail me:
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: linear,
              textAlign: "center",
              cursor: "default",
            }}
          >
            naumanj841@gmail.com
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
