import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import { useTheme } from "../../theme";

const ProjectCard = ({ image, title, description, techStack, live }) => {
  const { heading, subHeading, mode } = useTheme();
  const backColor = mode === "light" ? "#ffff" : "#363636";

  const viewHandler = () => {
    window.open(live, "_blank");
  };

  return (
    <>
      <Card
        sx={{
          width: "400px",
          height: "567px",
          borderRadius: "20px",
          boxShadow: mode === "light" && "0px 10px 10px 1px rgba(0, 0, 0, 0.2)",
          backgroundColor: backColor,
          margin: " auto",
        }}
      >
        <CardMedia
          sx={{ height: "260px", width: "100%" }}
          image={image}
          title={title}
        />
        <CardContent
          sx={{
            width: "100%",
            paddingX: "5%",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              fontSize: "28px",
              color: heading,
              cursor: "default",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              maxHeight: "175px",
              overflow: "auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                minHeight: "120px",
                color: subHeading,
                cursor: "default",
              }}
            >
              {description}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: subHeading,
                cursor: "default",
              }}
            >
              <span
                style={{
                  color: heading,
                  fontWeight: "bold",
                }}
              >
                Tech Stack:{" "}
              </span>

              {techStack.map((tech) => {
                return tech;
              })}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            startIcon={<LinkIcon />}
            onClick={viewHandler}
            sx={{
              marginLeft: "3%",
            }}
          >
            Live Preview
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
