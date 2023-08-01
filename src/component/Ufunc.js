
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Paper, Typography,Box, Button } from '@material-ui/core'

const useStyle = makeStyles((theme)=>({
    root:{
        width:'100vw',
        height:'100vh',
        backgroundColor:theme.palette.grey[200],
        paddingTop:'50px'
    }
}))
function Ufunc() {
    const classes = useStyle()
    return (
        <div>
           <Container className={classes.root}>
               <Paper width={500} 
               component={Box} p={4}
               borderLeft={5}
               borderColor="secondary.main"
               boxShadow={4}
               >  
                   <Typography variant="h4">
                       This is heading
                   </Typography>
                   <Typography variant="subtitle1" gutterBottom>
                   It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout
                   </Typography>
                   <Button variant="outlined" color="secondary">
                       Read More
                   </Button>
               </Paper>
            </Container>  
        </div>
    )
}

export default Ufunc
