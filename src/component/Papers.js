import { Container ,Typography,Button,Paper,Box} from '@material-ui/core'
import React from 'react'

function Papers() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper square elevation={2} variant="outlined">
                   <Box p={2}>
                   <Typography variant="h4">
                        This is card type
                    </Typography>
                    <Typography>
                    It is a long established fact that a reader will be distracted
                     by the readable content of a page when looking at its layout  
                    </Typography>
                    <Button variant="contained" color="secondary">Learn More</Button>
                    </Box> 
                </Paper>
            </Container>
        </div>
    )
}

export default Papers
