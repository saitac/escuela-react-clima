import { Box, TextField, Select, MenuItem} from "@mui/material"
import "./Form.module.css"
import theme from "../../theme/theme"
import Prueba from "./Prueba"
//import "./Prueba1.css"

const Form = () => {
    return(

        <Box 
            component="form"
            alignItems="center"
            border='20px solid grey'
            sx={{ border: '2px solid grey', borderRadius:2, padding: 1 }}
            
        >
            
            <TextField
                id="city"
                label="Ciudad"
                variant="standard"

            />
            <Select>
                <MenuItem value="">-- Seleccione un País --</MenuItem>
            </Select>

        </Box>
        
        /*<form style={{padding: 10}}>
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
        </form>*/
    )
}

export default Form