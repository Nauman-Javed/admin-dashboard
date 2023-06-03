import { Box, Container, CssBaseline } from "@mui/material";
import { useTheme } from "./theme";

import { Home, About, TechStack, Projects, Contact } from "./views";
import Navbar from "./views/global/Navbar";

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
