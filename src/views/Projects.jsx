import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../data/mockData";

const Projects = () => {
  const { heading, subHeading } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          marginTop: {
            xs: "50px",
            md: "none",
          },
        }}
      >
        <Stack mb={10} textAlign={"center"}>
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={2}>
            Projects
          </Typography>
          <Typography variant="h6" color={subHeading}>
            Projects I’ve built so far
          </Typography>
        </Stack>
        <Box>
          <Grid container spacing={2}>
            {projects.map((project) => {
              return (
                <Grid item xs={12} md={6} lg={4}>
                  <ProjectCard
                    image={project.img}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    live={project.livePreview}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
