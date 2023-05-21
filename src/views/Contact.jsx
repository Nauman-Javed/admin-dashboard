import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";

const Contact = () => {
  const { heading, linear } = useTheme();

  return (
    <>
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          paddingTop: "250px",
          textAlign: "center",
        }}
      >
        <Stack>
          <Typography variant="h2" fontWeight={"bold"} color={heading} mb={2}>
            Lets work together mail me:
          </Typography>
          <Typography variant="h4" color={linear}>
            naumanj841@gmail.com
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
