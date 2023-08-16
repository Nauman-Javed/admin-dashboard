import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import Experience from "../components/About/Experience";

const About = () => {
  const { heading, subHeading } = useTheme();

  return (
    <>
      <Box maxWidth={{ sm: "100%", lg: "50%" }} height={"100vh"}>
        <Box mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: heading,
              marginBottom: 4,
              cursor: "default",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: subHeading,
              textAlign: "justify",
              cursor: "default",
              fontSize: {
                xs: "16px",
                sm: "20px",
              },
            }}
          >
            Highly motivated entry-level Front-End Developer with 1 year of
            experience in ReactJS, proficient in HTML, CSS, and
            JavaScript/TypeScript, seeking to leverage my skills to create
            visually appealing and user-friendly interfaces, and contribute to
            the success of a dynamic and innovative team.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: heading,
              marginBottom: 4,
              cursor: "default",
              textAlign: { xs: "center", sm: "left" },
              fontSize: {
                xs: "42px",
                sm: "48px",
              },
            }}
          >
            Work Experience
          </Typography>
          <Experience
            title={"3D Artist"}
            company={"Quell x Code"}
            location={"Islamabad"}
            status={"Internship"}
            duration={"Aug 2022 - Sep 2022"}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: heading,
              marginBottom: 4,
              cursor: "default",
              textAlign: { xs: "center", sm: "left" },
              fontSize: {
                xs: "42px",
                sm: "48px",
              },
            }}
          >
            Education
          </Typography>
          <Experience
            title={"Bachelors (Computer Science)"}
            company={"Capital University of Science and Technology"}
            location={"Islamabad"}
            duration={"2019 - 2023"}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
