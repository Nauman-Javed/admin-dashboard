import {
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
          maxWidth: "373px",
          height: "500px",
          borderRadius: "20px",
          boxShadow: mode === "light" && "0px 10px 10px 1px rgba(0, 0, 0, 0.2)",
          backgroundColor: backColor,
        }}
      >
        <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
        <CardContent
          sx={{
            paddingX: "5%",
            maxHeight: "244px",
            height: "100%",
            overflow: "auto",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            fontSize={"28px"}
            color={heading}
          >
            {title}
          </Typography>
          <Typography variant="body1" minHeight={"120px"} color={subHeading}>
            {description}
          </Typography>
          <Typography variant="body1" fontSize={"16px"} color={subHeading}>
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
