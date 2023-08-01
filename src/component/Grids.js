import { Container, Grid, Paper, Typography,Button, Box } from '@material-ui/core'
import React from 'react'

function Grids() {
    return (
        <div>
            <Container>
                <Grid container justify="space-around" spacing={4}  >
                    <Grid item lg={3} sm={6}>
                        <Paper component={Box} p={3} >
                            <Typography variant="h5">This is header</Typography>
                            <Typography variant="subtitle1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry.
                              printer took a galley of type and scrambled it to make a type
                              
                            </Typography>
                            <Button>Read More</Button>
                        </Paper> 
                    </Grid>
                    <Grid item lg={3} sm={6}>
                        <Paper component={Box} p={2} >
                            <Typography variant="h5">This is header</Typography>
                            <Typography variant="subtitle1">
                           the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type
                            </Typography>
                            <Button>Read More</Button>
                        </Paper> 
                    </Grid>
                    <Grid item lg={3} sm={6}>
                        <Paper component={Box} p={2} >
                            <Typography variant="h5">This is header</Typography>
                            <Typography variant="subtitle1">
                            industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type
                            
                            </Typography>
                            <Button>Read More</Button>
                        </Paper> 
                    </Grid>
                    <Grid item lg={3} sm={6}>
                        <Paper component={Box} p={2} >
                            <Typography variant="h5">This is header</Typography>
                            <Typography variant="subtitle1">
                            industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type
                            
                            </Typography>
                            <Button>Read More</Button>
                        </Paper> 
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Grids
