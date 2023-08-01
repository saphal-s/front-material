import { Container, Paper, Typography,Box, Button } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import theme from './Theme'
 

const useStyle = makeStyles((theme)=>({
    root:{
        width:'100vw',
        height:'100vh',
        paddingTop:theme.spacing(5),
        backgroundColor:theme.palette.grey[200],
    },
    mr:{
        marginRight:'5px'

    }
}))

function Ucustomization() {
    const classes = useStyle()
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Paper component={Box} width="50%" mx="auto" p={3}>
                    <Typography variant="h5" color="primary">This is heading</Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted by
                     the readable content of a page when looking at its layout. 
                     The point of using Lorem Ipsum is that it has
                     a more-or-less normal distribution of letters, as op
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.mr}> Read More</Button>
                    <Button variant="contained" color="secondary"> Share Post</Button>
                </Paper>
            </Container>
            </ThemeProvider>
        </div>
    )
}

export default Ucustomization
