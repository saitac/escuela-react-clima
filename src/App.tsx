import { Box, Button, Grid, StyledEngineProvider, ThemeProvider } from "@mui/material"
import styles from "./App.module.css"
import Form from "./components/Form/Form"
import theme from "./theme/theme"

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Box>
          <h1 className={styles.title}>Buscador de Clima</h1>
          <Grid container columnSpacing={{xs: 5}}>
            <Grid item xs={6} alignItems={"center"}>
              <Form/>
            </Grid>
            <Grid item xs={6} alignItems={"center"}>
              <h1>HOLA2</h1>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
  )
}

export default App
