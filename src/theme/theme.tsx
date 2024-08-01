import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors";




const theme = createTheme({

    palette: {
        primary: {
            main: '#aed581',
        },

        secondary: {
            main: '#ffcc80',
        },
    },
    
      components: {
      // Name of the component
      MuiButton: {

        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },

        styleOverrides:{
            root:{
                fontSize: "1rem"
            }
        }
      },

      MuiTextField: {
        defaultProps:{
            multiline: true,
            
        },

        styleOverrides:{
            root: {
                backgroundColor: "#ffffff"
            }
        }
      },

      MuiSlider: {
        styleOverrides:{
            thumb: {
                borderRadius: "1px"
            }
        }
      }
    },
  });



/*
const theme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });
*/

export default theme