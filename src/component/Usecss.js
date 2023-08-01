import { Box ,Typography} from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        maxWidth:"100%",
        maxHeight:700,
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"space-evenly",
        flexWrap:"wrap",
    },
    mybox:{
        width:300,
        backgroundColor:theme.palette.common.black,
        color:"white",
        padding:theme.spacing(3),
        borderRadius:4,
        boxShadow:theme.shadows[5],
    },
    
}))
function Usecss() {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.mybox}>
                    <Typography variant="h4" >This is heading 1 </Typography>
                    <Typography>
                    It is a long est
                    reader will be distracted by the readable content of a page when looking 
                    at its layout  
                    </Typography>
                </Box>
                <Box className={classes.mybox}>
                <Typography variant="h4" >This is heading 2</Typography>
                <Typography>
                It is a long est
                 reader will be distracted by the readable content of a page when looking 
                 at its layout  
                </Typography>
                </Box>
                <Box className={classes.mybox}>
                <Typography variant="h4" >This is heading 3</Typography>
                <Typography>
                It is a long est
                 reader will be distracted by the readable content of a page when looking 
                 at its layout  
                </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Usecss
