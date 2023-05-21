import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import Experience from "../components/About/Experience";

const About = () => {
  const { heading, subHeading } = useTheme();

  return (
    <>
      <Box maxWidth={{ sm: "100%", lg: "50%" }} height={"100vh"} id="about">
        <Box mb={4}>
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={4}>
            About Me
          </Typography>
          <Typography variant="h6" color={subHeading}>
            Self-motivated individual looking for a challenging position as a
            Web Developer utilizing my technical and problem-solving skills to
            develop innovative and responsive website designs.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={4}>
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
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={4}>
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
