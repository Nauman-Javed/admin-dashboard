import { Box, Container, CssBaseline, Grid } from "@mui/material";
import { useTheme } from "./theme";
import Navbar from "./global/Navbar";

import { Home, About, TechStack, Projects, Contact } from "./views";

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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Home />
            </Grid>
            <Grid item xs={12}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <TechStack />
            </Grid>
            <Grid item xs={12}>
              <Projects />
            </Grid>
            <Grid item xs={12}>
              <Contact />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
