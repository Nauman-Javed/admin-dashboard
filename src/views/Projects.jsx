import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "../theme";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const { heading, subHeading, mode } = useTheme();
  const backColor = mode === "light" ? "#ffff" : "#363636";
  return (
    <>
      <Box height={"100vh"} width={"100%"}>
        <Stack mb={20}>
          <Typography variant="h3" fontWeight={"bold"} color={heading} mb={2}>
            Projects
          </Typography>
          <Typography variant="h6" color={subHeading}>
            Projects I have built
          </Typography>
        </Stack>
        <Box>
          <Card
            sx={{
              maxWidth: "373px",
              height: "500px",
              borderRadius: "20px",
              boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
              backgroundColor: backColor,
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent sx={{ paddingX: "5%" }}>
              <Typography
                gutterBottom
                variant="h4"
                fontSize={"28px"}
                color={heading}
              >
                Project Tile
              </Typography>
              <Typography
                variant="body1"
                minHeight={"140px"}
                color={subHeading}
              >
                React project Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Placeat nostrum adipisci unde!
              </Typography>
              <Typography variant="body1" fontSize={"16px"} color={subHeading}>
                Tech stack :
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={6} marginLeft={"5%"}>
                <Button variant="text" startIcon={<LinkIcon />}>
                  Live Preview
                </Button>
                <Button variant="text" startIcon={<GitHubIcon />}>
                  View Code
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
