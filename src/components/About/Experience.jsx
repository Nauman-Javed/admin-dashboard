import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useTheme } from "../../theme";

const Experience = ({ title, company, location, status, duration }) => {
  const { subHeading, statusC, statusBackground } = useTheme();

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} my={3}>
        <Box>
          <Typography
            fontWeight={"bold"}
            color={subHeading}
            letterSpacing={2}
            mb={2}
          >
            {title}
          </Typography>
          <Box display={"flex"} gap={4}>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                color: subHeading,
              }}
            >
              <ApartmentIcon />
              {company}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                color: subHeading,
              }}
            >
              <LocationOnIcon />
              {location}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body1"
            color={statusC}
            sx={{
              backgroundColor: statusBackground,
              padding: " 0 25px",
              borderRadius: "15px",
              width: "fit-content",
              marginBottom: 2,
              fontWeight: "bold",
            }}
          >
            {status}
          </Typography>
          <Typography variant="body1" color={subHeading}>
            {duration}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Experience;
