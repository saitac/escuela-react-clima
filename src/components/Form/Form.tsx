import { Button, Slider, StyledEngineProvider, TextField, ThemeProvider } from "@mui/material"
import "./Form.module.css"
import theme from "../../theme/theme"
import Prueba from "./Prueba"
//import "./Prueba1.css"

const Form = () => {
    return(
        <form style={{padding: 10}}>
            <div style={{margin: 10}}>
                <label htmlFor="city">Ciudad:</label>
                <TextField
                    id="city"
                    label="Outlined"
                    //color="warning"
                ></TextField>

            </div>
            <div>
                
                <Button>HOLA</Button>
                <Button>CHAU</Button>
            
                <Prueba></Prueba>

                

            </div>
        </form>
    )
}

export default Form