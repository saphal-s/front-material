import { Container, Typography,Box,Paper,Button} from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';


function Usebuttons() {
    return (
        <div>
            <Container maxWidth="sm">
                <Box p={4}>
                    <Paper>
                        <Typography variant="h4">This is heading</Typography>
                        <Typography varient="subtitle1">
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout
                        </Typography>
                        <Box mt={2}>
                <Button color="secondary" variant="contained" startIcon={<HomeIcon/>} >
                                Read More
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default Usebuttons
