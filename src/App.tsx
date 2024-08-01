import { Button, StyledEngineProvider, ThemeProvider } from "@mui/material"
import styles from "./App.module.css"
import Form from "./components/Form/Form"
import theme from "./theme/theme"

function App() {

  return (
      <ThemeProvider theme={theme}>
        <section>
          <h1 className={styles.title}>Buscador de Clima</h1>

          <div className={styles.container}>
            <p>1</p>
            <p>2</p>
            <Form></Form>
          </div>
        </section>
      </ThemeProvider>
      
      /*<StyledEngineProvider injectFirst>
        <section>
          <h1 className={styles.title}>Buscador de Clima</h1>

          <div className={styles.container}>
            <p>1</p>
            <p>2</p>
            <Form></Form>
          </div>
        </section>
      </StyledEngineProvider>*/
  )
}

export default App
