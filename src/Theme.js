import {createMuiTheme} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import deepOrange from '@material-ui/core/colors/deepOrange'
const theme = createMuiTheme({
    spacing:10,
    typography:{
        fontFamily:["Lato","sans-serif"].join(","),
      h5:{
          fontFamily:"Roboto",
          fontSize:"3rem"
      }  
    },
    palette:{
        primary:{
            main: teal[500]
        },

        secondary:{
            main: deepOrange[500],
        }
    }
})

export default theme