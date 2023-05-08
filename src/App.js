import { Box, Container, CssBaseline } from "@mui/material";
import { useTheme } from "./theme";
import TechStack from "./views/TechStack";
import Home from "./views/Home";
import Navbar from "./global/Navbar";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import About from "./views/About";

function App() {
  const { background } = useTheme();

  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          background: background,
        }}
      >
        <Container maxWidth={"xl"}>
          <Navbar />
          <Home />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </Container>
      </Box>
    </>
  );
}

export default App;
